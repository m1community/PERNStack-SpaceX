import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
@ObjectType()
export class User extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column({unique: true})
    username: string

    @Field()
    @Column({unique: true})
    email: string

    @Column()
    password: string

    @Field(() => String, {nullable: true})
    @Column({nullable: true})
    first_name?: string

    @Field(() => String, {nullable: true})
    @Column({nullable: true})
    last_name?: string

    @Field(() => String)
    @CreateDateColumn()
    created_at: Date

    @Field(() => String)
    @UpdateDateColumn()
    updated_at: Date
}