import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { CommissionPaymentStatus } from '../prisma/commission-payment-status.enum';

@InputType()
export class CommissionPaymentCreateManyEmployeeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: Decimal;

    @Field(() => String, {nullable:true})
    loanId?: string;

    @Field(() => String, {nullable:false})
    paymentScheduleId!: string;

    @Field(() => CommissionPaymentStatus, {nullable:false})
    status!: keyof typeof CommissionPaymentStatus;
}
