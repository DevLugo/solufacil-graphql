import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { CommissionPaymentStatus } from '../prisma/commission-payment-status.enum';

@ObjectType()
export class CommissionPaymentMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    amount?: Decimal;

    @Field(() => String, {nullable:true})
    loanId?: string;

    @Field(() => String, {nullable:true})
    paymentScheduleId?: string;

    @Field(() => String, {nullable:true})
    employeeId?: string;

    @Field(() => CommissionPaymentStatus, {nullable:true})
    status?: keyof typeof CommissionPaymentStatus;
}
