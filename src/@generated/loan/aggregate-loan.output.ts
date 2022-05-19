import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LoanCountAggregate } from './loan-count-aggregate.output';
import { LoanAvgAggregate } from './loan-avg-aggregate.output';
import { LoanSumAggregate } from './loan-sum-aggregate.output';
import { LoanMinAggregate } from './loan-min-aggregate.output';
import { LoanMaxAggregate } from './loan-max-aggregate.output';

@ObjectType()
export class AggregateLoan {

    @Field(() => LoanCountAggregate, {nullable:true})
    _count?: LoanCountAggregate;

    @Field(() => LoanAvgAggregate, {nullable:true})
    _avg?: LoanAvgAggregate;

    @Field(() => LoanSumAggregate, {nullable:true})
    _sum?: LoanSumAggregate;

    @Field(() => LoanMinAggregate, {nullable:true})
    _min?: LoanMinAggregate;

    @Field(() => LoanMaxAggregate, {nullable:true})
    _max?: LoanMaxAggregate;
}
