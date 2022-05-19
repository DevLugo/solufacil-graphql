import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanState } from '../prisma/loan-state.enum';
import { HideField } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@InputType()
export class LoanCreateManyEmployeeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    status!: keyof typeof LoanState;

    @Field(() => GraphQLDecimal, {nullable:false})
    weeklyPaymentAmount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    amountToPay?: Decimal;

    @Field(() => Date, {nullable:true})
    signDate?: Date | string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    contractId!: string;

    @Field(() => String, {nullable:false})
    loantypeId!: string;
}
