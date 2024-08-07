import { Field, ID, InputType, ObjectType } from "@nestjs/graphql";
import { Employee } from "../employee/types";

@ObjectType()
export class Location {
    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ID, {nullable:false})
    municipalityId!: string;

    @Field(() => ID, {nullable:false})
    stateId!: string;

    /* @Field(() => [Employee], {nullable:false})
    leads?: Employee[]; */
}

@InputType()
export class LocationWhereInput {
    @Field(() => ID, {nullable:false})
    routeId!: string;

    @Field(() => String, {nullable:true})
    name?: string;
}