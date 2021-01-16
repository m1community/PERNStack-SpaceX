import { SpacexContext } from "../context/SpacexContext";
import { User } from "../entities/User";
import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";
import argon2 from "argon2"
import { FieldErrors } from "../errors/FieldErrors";
import { COOKIE_NAME } from "../utils/constants";
import { UserValidatorSchema } from '../utils/UserValidatorSchema'
import { ValidationError } from "apollo-server-express";
import { UserResponse, UserInput } from "../utils/types";
import fs from "fs";
import { FileUpload, GraphQLUpload } from "graphql-upload"
import path from "path";


@Resolver(User)
export class UserResolver {

    @Query(() => [User])
    async users(): Promise<User[]> {
        return await User.find()
    }

    @Query(() => User)
    async user(
        @Arg('id', () => Int) id: number
    ) {
        return await User.findOne(id)
    }

    @Query(() => User, {nullable: true})
    async me(
        @Ctx() {req}: SpacexContext
    ) {
        //@ts-ignore
        const id = req.session.userId
        if(!id) return null
        console.log(id)
        return await User.findOne(id)
    }

    @Mutation(() => Boolean)
    async deleteUser(
        @Arg('id', () => Int) id: number
    ) {
        return new Promise<boolean>(res => {
            try {
                User.delete(id)
                res(true)
            }catch {
                res(false)
            }
        })
    }

    @Mutation(() => Boolean)
    async logout(
        @Ctx() {req, res}: SpacexContext
    ): Promise<boolean> {
       
        return new Promise<boolean>(resolve => req.session.destroy(error => {
            res.clearCookie(COOKIE_NAME)
            if(error) {
                console.log(error)
                resolve(false)
                return
            }
            resolve(true)
        }))
    }

    
    @Mutation(() => UserResponse)
    async registerUser(
        @Arg('input') input: UserInput,
        @Ctx() {req}: SpacexContext
    ): Promise<UserResponse> {

        const errors: FieldErrors[] = [];
        
        try {
            await UserValidatorSchema.validate(input, {abortEarly: false})
            console.log("test")
        }catch(e) {
            e.inner.forEach((err: ValidationError) => {
                
                errors.push({
                    field: err.path,
                    message: err.message
                })
            })
          
            return {
                errors
            }
        }

        const isEmail = !!await User.findOne({where: {email: input.email}}) 
        if(isEmail) {
            return {
                errors: [{
                    field: "email",
                    message: "The email is already taken."
                }]
            }
        }

        const isUsername = !!await User.findOne({where: {username: input.username}})
        if(isUsername) {
            return {
                errors: [{
                    field: "username",
                    message: "The username already exists"
                }]
            }
        }
        const hashedPassword = await argon2.hash(input.password)
      
        const user = await User.create({username: input.username.toLocaleLowerCase(), password: hashedPassword, email: input.email}).save()

        //@ts-ignore
        req.session.userId = user.id

        return {
            callback: user
        }
    }

    @Mutation(() => UserResponse)
    async loginUser(
        @Arg('usernameOrEmail') usernameOrEmail: string,
        @Arg('password') password: string,
        @Ctx() {req}: SpacexContext 
    ): Promise<UserResponse> {

        const user = await User.findOne(usernameOrEmail.includes('@')  
            ? {where: {email: usernameOrEmail}}
            : {where: {username: usernameOrEmail.toLocaleLowerCase()}}
        )
        if(!user) {
            return {
                errors: [{
                    field: "usernameOrEmail",
                    message: "The user doesn't exist."
                }]
            }
        }

        const checkPassword = await argon2.verify(user.password, password)
        if(!checkPassword) {
            return {
                errors: [{
                    field: "password",
                    message: "The passwords did not match."
                }]
            }
        }

        //@ts-ignore
        req.session.userId = user.id
        
        return {
            callback: user
        }
    }

    private file: string = ""

    @Mutation(() => Boolean)
    async addAvatar(
        @Arg("file", () => GraphQLUpload) {createReadStream, filename}: FileUpload,
        @Ctx() {req}: SpacexContext
    ): Promise<Boolean> {
       
        //@ts-ignore
        const imageName = `user_${req.session.userId}_${filename}` 
        const pathName = path.join(__dirname, `../../images/${imageName}`)
        
        
        console.log(req.session.userId)

        return new Promise((resolve, reject) => {
            if(!req.session.userId) return resolve(false)
            createReadStream().pipe(fs.createWriteStream(pathName))
                .on("finish", () => {
                    this.file = imageName
                    console.log(pathName)
                    resolve(true)
                })
                .on("error",() => reject(false))
        })
    }

    @Query(() => String)
    getAvatar(): string {
        return this.file
    }
}

