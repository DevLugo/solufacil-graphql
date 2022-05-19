import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime';
import { PaymentState } from '../prisma/payment-state.enum';
import { Employee } from '../employee/employee.model';

@ObjectType()
export class Expenses {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amountToPay!: Decimal;

    @Field(() => PaymentState, {nullable:false})
    status!: keyof typeof PaymentState;

    @Field(() => Date, {nullable:false})
    dueDate!: Date;

    @Field(() => Date, {nullable:false})
    payedAt!: Date;

    @Field(() => Employee, {nullable:false})
    employee?: Employee;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => String, {nullable:false})
    employeeId!: string;
}
