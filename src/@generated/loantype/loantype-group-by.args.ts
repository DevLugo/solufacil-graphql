import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoantypeWhereInput } from './loantype-where.input';
import { LoantypeOrderByWithAggregationInput } from './loantype-order-by-with-aggregation.input';
import { LoantypeScalarFieldEnum } from './loantype-scalar-field.enum';
import { LoantypeScalarWhereWithAggregatesInput } from './loantype-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LoantypeCountAggregateInput } from './loantype-count-aggregate.input';
import { LoantypeAvgAggregateInput } from './loantype-avg-aggregate.input';
import { LoantypeSumAggregateInput } from './loantype-sum-aggregate.input';
import { LoantypeMinAggregateInput } from './loantype-min-aggregate.input';
import { LoantypeMaxAggregateInput } from './loantype-max-aggregate.input';

@ArgsType()
export class LoantypeGroupByArgs {

    @Field(() => LoantypeWhereInput, {nullable:true})
    where?: LoantypeWhereInput;

    @Field(() => [LoantypeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LoantypeOrderByWithAggregationInput>;

    @Field(() => [LoantypeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LoantypeScalarFieldEnum>;

    @Field(() => LoantypeScalarWhereWithAggregatesInput, {nullable:true})
    having?: LoantypeScalarWhereWithAggregatesInput;

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
