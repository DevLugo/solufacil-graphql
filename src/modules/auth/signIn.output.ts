import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "../../@generated/user/user.model";

@ObjectType()
export class SignInOutput {
    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => User, {nullable:false})
    user!: User;
}
