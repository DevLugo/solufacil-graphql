import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class State {
    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;
}