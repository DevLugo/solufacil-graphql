import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SignInOutput {
    @Field(() => String, {nullable:false})
    token!: string;
}
