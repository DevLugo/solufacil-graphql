import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Municipality {
    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ID, {nullable:false})
    stateId!: string;
}