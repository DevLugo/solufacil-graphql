import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { PaymentState } from '../prisma/payment-state.enum';
import { LoanCreateNestedOneWithoutPaymentsInput } from '../loan/loan-create-nested-one-without-payments.input';

@InputType()
export class LoanPaymentCreateInput {

    @HideField()
    id?: string;

    @Field(() => Int, {nullable:false})
    numeration!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: any;

    @HideField()
    status!: keyof typeof PaymentState;

    @Field(() => Date, {nullable:false})
    paidDate!: Date | string;

    @Field(() => Date, {nullable:false})
    dueDate!: Date | string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => LoanCreateNestedOneWithoutPaymentsInput, {nullable:true})
    Loan?: LoanCreateNestedOneWithoutPaymentsInput;
}
