import { Field, ID, ObjectType } from "@nestjs/graphql";
import { EmployeesTypes } from "@prisma/client";

@ObjectType()
export class Route {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;
    
}
