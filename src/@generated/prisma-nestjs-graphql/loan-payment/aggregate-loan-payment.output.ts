import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LoanPaymentCountAggregate } from './loan-payment-count-aggregate.output';
import { LoanPaymentAvgAggregate } from './loan-payment-avg-aggregate.output';
import { LoanPaymentSumAggregate } from './loan-payment-sum-aggregate.output';
import { LoanPaymentMinAggregate } from './loan-payment-min-aggregate.output';
import { LoanPaymentMaxAggregate } from './loan-payment-max-aggregate.output';

@ObjectType()
export class AggregateLoanPayment {

    @Field(() => LoanPaymentCountAggregate, {nullable:true})
    _count?: LoanPaymentCountAggregate;

    @Field(() => LoanPaymentAvgAggregate, {nullable:true})
    _avg?: LoanPaymentAvgAggregate;

    @Field(() => LoanPaymentSumAggregate, {nullable:true})
    _sum?: LoanPaymentSumAggregate;

    @Field(() => LoanPaymentMinAggregate, {nullable:true})
    _min?: LoanPaymentMinAggregate;

    @Field(() => LoanPaymentMaxAggregate, {nullable:true})
    _max?: LoanPaymentMaxAggregate;
}
