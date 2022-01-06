import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EmployeesTypes } from '../prisma/employees-types.enum';

@ObjectType()
export class EmployerMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => EmployeesTypes, {nullable:true})
    type?: keyof typeof EmployeesTypes;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    fullName?: string;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
