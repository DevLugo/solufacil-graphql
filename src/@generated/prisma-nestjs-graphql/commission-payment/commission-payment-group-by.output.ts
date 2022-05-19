import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { CommissionPaymentStatus } from '../prisma/commission-payment-status.enum';
import { CommissionPaymentCountAggregate } from './commission-payment-count-aggregate.output';
import { CommissionPaymentAvgAggregate } from './commission-payment-avg-aggregate.output';
import { CommissionPaymentSumAggregate } from './commission-payment-sum-aggregate.output';
import { CommissionPaymentMinAggregate } from './commission-payment-min-aggregate.output';
import { CommissionPaymentMaxAggregate } from './commission-payment-max-aggregate.output';

@ObjectType()
export class CommissionPaymentGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: Decimal;

    @Field(() => String, {nullable:true})
    loanId?: string;

    @Field(() => String, {nullable:false})
    paymentScheduleId!: string;

    @Field(() => String, {nullable:false})
    employeeId!: string;

    @Field(() => CommissionPaymentStatus, {nullable:false})
    status!: keyof typeof CommissionPaymentStatus;

    @Field(() => CommissionPaymentCountAggregate, {nullable:true})
    _count?: CommissionPaymentCountAggregate;

    @Field(() => CommissionPaymentAvgAggregate, {nullable:true})
    _avg?: CommissionPaymentAvgAggregate;

    @Field(() => CommissionPaymentSumAggregate, {nullable:true})
    _sum?: CommissionPaymentSumAggregate;

    @Field(() => CommissionPaymentMinAggregate, {nullable:true})
    _min?: CommissionPaymentMinAggregate;

    @Field(() => CommissionPaymentMaxAggregate, {nullable:true})
    _max?: CommissionPaymentMaxAggregate;
}
