import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { User } from "../user/types";

@ObjectType()
export class IJwtPayload {
    @Field(() => String, {nullable:false})
    id: string;

    @Field(() => String, {nullable:false})
    email: string;
    
    @Field(() => String, {nullable:false})
    iat?: Date;
}

@InputType()
export class SignInInput {
    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;
}



@ObjectType()
export class SignInOutput {
    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => User, {nullable:false})
    user!: User;
}
