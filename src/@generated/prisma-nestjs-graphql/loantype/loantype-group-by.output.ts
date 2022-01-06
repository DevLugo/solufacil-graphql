import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { LoantypeCountAggregate } from './loantype-count-aggregate.output';
import { LoantypeAvgAggregate } from './loantype-avg-aggregate.output';
import { LoantypeSumAggregate } from './loantype-sum-aggregate.output';
import { LoantypeMinAggregate } from './loantype-min-aggregate.output';
import { LoantypeMaxAggregate } from './loantype-max-aggregate.output';

@ObjectType()
export class LoantypeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    weekDuration!: number;

    @Field(() => Float, {nullable:false})
    MaxAmount!: number;

    @Field(() => Float, {nullable:false})
    rate!: number;

    @Field(() => Float, {nullable:false})
    overdueRate!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
