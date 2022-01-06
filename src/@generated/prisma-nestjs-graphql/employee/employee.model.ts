import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { EmployeesTypes } from '../prisma/employees-types.enum';
import { Phone } from '../phone/phone.model';
import { Document } from '../document/document.model';
import { Contract } from '../contract/contract.model';
import { EmployeeCount } from './employee-count.output';

@ObjectType()
export class Employee {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => EmployeesTypes, {nullable:false})
    type!: keyof typeof EmployeesTypes;

    @Field(() => [Phone], {nullable:true})
    phones?: Array<Phone>;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    fullName!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => [Document], {nullable:true})
    documents?: Array<Document>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Contract], {nullable:true})
    Contract?: Array<Contract>;

    @Field(() => EmployeeCount, {nullable:false})
    _count?: EmployeeCount;
}
