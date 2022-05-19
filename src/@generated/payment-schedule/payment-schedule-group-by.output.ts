import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { PaymentState } from '../prisma/payment-state.enum';
import { PaymentScheduleCountAggregate } from './payment-schedule-count-aggregate.output';
import { PaymentScheduleAvgAggregate } from './payment-schedule-avg-aggregate.output';
import { PaymentScheduleSumAggregate } from './payment-schedule-sum-aggregate.output';
import { PaymentScheduleMinAggregate } from './payment-schedule-min-aggregate.output';
import { PaymentScheduleMaxAggregate } from './payment-schedule-max-aggregate.output';

@ObjectType()
export class PaymentScheduleGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    numeration!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    amountToPay!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    paidAmount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    returnToCapital!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    profit!: Decimal;

    @Field(() => PaymentState, {nullable:false})
    status!: keyof typeof PaymentState;

    @Field(() => Boolean, {nullable:false})
    delayed!: boolean;

    @Field(() => Date, {nullable:false})
    dueDate!: Date | string;

    @Field(() => String, {nullable:true})
    details?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    loanId!: string;

    @Field(() => PaymentScheduleCountAggregate, {nullable:true})
    _count?: PaymentScheduleCountAggregate;

    @Field(() => PaymentScheduleAvgAggregate, {nullable:true})
    _avg?: PaymentScheduleAvgAggregate;

    @Field(() => PaymentScheduleSumAggregate, {nullable:true})
    _sum?: PaymentScheduleSumAggregate;

    @Field(() => PaymentScheduleMinAggregate, {nullable:true})
    _min?: PaymentScheduleMinAggregate;

    @Field(() => PaymentScheduleMaxAggregate, {nullable:true})
    _max?: PaymentScheduleMaxAggregate;
}
