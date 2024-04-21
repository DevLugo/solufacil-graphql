import { Field, ID, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Route {
    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class RouteWhereInput {
    @Field(() => String, {nullable:true})
    name?: string;
}
