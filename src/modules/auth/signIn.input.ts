import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class SignInInput {
    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;
}
