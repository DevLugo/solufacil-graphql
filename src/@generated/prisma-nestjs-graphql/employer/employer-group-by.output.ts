import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EmployeesTypes } from '../prisma/employees-types.enum';
import { EmployerCountAggregate } from './employer-count-aggregate.output';
import { EmployerMinAggregate } from './employer-min-aggregate.output';
import { EmployerMaxAggregate } from './employer-max-aggregate.output';

@ObjectType()
export class EmployerGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => EmployeesTypes, {nullable:false})
    type!: keyof typeof EmployeesTypes;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    fullName!: string;

    @Field(() => String, {nullable:false})
    firstName!: string;

    @Field(() => String, {nullable:false})
    lastName!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => EmployerCountAggregate, {nullable:true})
    _count?: EmployerCountAggregate;

    @Field(() => EmployerMinAggregate, {nullable:true})
    _min?: EmployerMinAggregate;

    @Field(() => EmployerMaxAggregate, {nullable:true})
    _max?: EmployerMaxAggregate;
}
