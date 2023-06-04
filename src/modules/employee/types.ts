import { Field, ID, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Employee {
    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class EmployeeWhereInput {
    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    name?: string;
}