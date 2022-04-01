import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { PaymentState } from '../prisma/payment-state.enum';
import { HideField } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutExpensesInput } from '../user/user-create-nested-one-without-expenses.input';

@InputType()
export class ExpensesCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amountToPay!: any;

    @Field(() => PaymentState, {nullable:false})
    status!: keyof typeof PaymentState;

    @Field(() => Date, {nullable:false})
    dueDate!: Date | string;

    @Field(() => Date, {nullable:false})
    payedAt!: Date | string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutExpensesInput, {nullable:true})
    user?: UserCreateNestedOneWithoutExpensesInput;
}
