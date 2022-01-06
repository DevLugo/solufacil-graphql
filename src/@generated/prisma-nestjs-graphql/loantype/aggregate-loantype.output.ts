import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LoantypeCountAggregate } from './loantype-count-aggregate.output';
import { LoantypeAvgAggregate } from './loantype-avg-aggregate.output';
import { LoantypeSumAggregate } from './loantype-sum-aggregate.output';
import { LoantypeMinAggregate } from './loantype-min-aggregate.output';
import { LoantypeMaxAggregate } from './loantype-max-aggregate.output';

@ObjectType()
export class AggregateLoantype {

    @Field(() => LoantypeCountAggregate, {nullable:true})
    _count?: LoantypeCountAggregate;

    @Field(() => LoantypeAvgAggregate, {nullable:true})
    _avg?: LoantypeAvgAggregate;

    @Field(() => LoantypeSumAggregate, {nullable:true})
    _sum?: LoantypeSumAggregate;

    @Field(() => LoantypeMinAggregate, {nullable:true})
    _min?: LoantypeMinAggregate;

    @Field(() => LoantypeMaxAggregate, {nullable:true})
    _max?: LoantypeMaxAggregate;
}
