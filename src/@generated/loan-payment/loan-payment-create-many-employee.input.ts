import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { HideField } from '@nestjs/graphql';

@InputType()
export class LoanPaymentCreateManyEmployeeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: Decimal;

    @Field(() => Date, {nullable:false})
    date!: Date | string;

    @Field(() => String, {nullable:true})
    comments?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    loanId!: string;
}
