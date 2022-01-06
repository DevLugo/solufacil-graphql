import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoantypeWhereInput } from './loantype-where.input';
import { LoantypeOrderByWithRelationInput } from './loantype-order-by-with-relation.input';
import { LoantypeWhereUniqueInput } from './loantype-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LoantypeCountAggregateInput } from './loantype-count-aggregate.input';
import { LoantypeAvgAggregateInput } from './loantype-avg-aggregate.input';
import { LoantypeSumAggregateInput } from './loantype-sum-aggregate.input';
import { LoantypeMinAggregateInput } from './loantype-min-aggregate.input';
import { LoantypeMaxAggregateInput } from './loantype-max-aggregate.input';

@ArgsType()
export class LoantypeAggregateArgs {

    @Field(() => LoantypeWhereInput, {nullable:true})
    where?: LoantypeWhereInput;

    @Field(() => [LoantypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LoantypeOrderByWithRelationInput>;

    @Field(() => LoantypeWhereUniqueInput, {nullable:true})
    cursor?: LoantypeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LoantypeCountAggregateInput, {nullable:true})
    _count?: LoantypeCountAggregateInput;

    @Field(() => LoantypeAvgAggregateInput, {nullable:true})
    _avg?: LoantypeAvgAggregateInput;

    @Field(() => LoantypeSumAggregateInput, {nullable:true})
    _sum?: LoantypeSumAggregateInput;

    @Field(() => LoantypeMinAggregateInput, {nullable:true})
    _min?: LoantypeMinAggregateInput;

    @Field(() => LoantypeMaxAggregateInput, {nullable:true})
    _max?: LoantypeMaxAggregateInput;
}
