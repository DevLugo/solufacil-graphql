import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => ID, {nullable:true})
    employeeId?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:true})
    lastLogin!: Date | null;

    @Field(() => String, {nullable:true})
    profilePicture!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

}