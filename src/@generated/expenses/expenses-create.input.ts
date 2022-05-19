import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { PaymentState } from '../prisma/payment-state.enum';
import { EmployeeCreateNestedOneWithoutExpensesInput } from '../employee/employee-create-nested-one-without-expenses.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ExpensesCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amountToPay!: Decimal;

    @Field(() => PaymentState, {nullable:false})
    status!: keyof typeof PaymentState;

    @Field(() => Date, {nullable:false})
    dueDate!: Date | string;

    @Field(() => Date, {nullable:false})
    payedAt!: Date | string;

    @Field(() => EmployeeCreateNestedOneWithoutExpensesInput, {nullable:false})
    employee!: EmployeeCreateNestedOneWithoutExpensesInput;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    userId?: string;
}
