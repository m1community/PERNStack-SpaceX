import { User } from "../entities/User"
import { FieldErrors } from "../errors/FieldErrors"
import { InputType, Field, ObjectType } from "type-graphql"
import { Stream } from "stream"

@InputType()
export class UserInput {
    @Field()
    username: string

    @Field()
    email: string

    @Field()
    password: string
}


@ObjectType()
export class UserResponse {
    @Field(() => [FieldErrors], {nullable: true})
    errors?: FieldErrors[] 

    @Field(() => User, {nullable: true})
    callback?: User
}

export interface Upload {
    file_name: string
    mimetype: string,
    encoding: string,
    createReadStream: () => Stream
}