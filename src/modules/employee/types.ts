import { Field, ID, InputType, ObjectType, registerEnumType } from "@nestjs/graphql";
import { AccountType, EmployeesTypes } from "@prisma/client";

registerEnumType(EmployeesTypes, {
    name: 'EmployeesTypes',
});

@ObjectType()
export class Employee {
    @Field(() => ID, {nullable:false})
    id!: string;   


    @Field(() => ID, {nullable:true})
    userId: string

    @Field(() => EmployeesTypes, {nullable:true})
    type: keyof typeof EmployeesTypes;
}

@InputType()
export class EmployeeWhereUniqueInput {
    @Field(() => ID, {nullable:false})
    id!: string;
}

@InputType()
export class EmployeeWhereInput {
    @Field(() => [EmployeesTypes], { nullable: false })
    employeeTypes!: [EmployeesTypes];
}

