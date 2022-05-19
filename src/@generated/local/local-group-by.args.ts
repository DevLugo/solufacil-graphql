import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocalWhereInput } from './local-where.input';
import { LocalOrderByWithAggregationInput } from './local-order-by-with-aggregation.input';
import { LocalScalarFieldEnum } from './local-scalar-field.enum';
import { LocalScalarWhereWithAggregatesInput } from './local-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LocalCountAggregateInput } from './local-count-aggregate.input';
import { LocalMinAggregateInput } from './local-min-aggregate.input';
import { LocalMaxAggregateInput } from './local-max-aggregate.input';

@ArgsType()
export class LocalGroupByArgs {

    @Field(() => LocalWhereInput, {nullable:true})
    where?: LocalWhereInput;

    @Field(() => [LocalOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LocalOrderByWithAggregationInput>;

    @Field(() => [LocalScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LocalScalarFieldEnum>;

    @Field(() => LocalScalarWhereWithAggregatesInput, {nullable:true})
    having?: LocalScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LocalCountAggregateInput, {nullable:true})
    _count?: LocalCountAggregateInput;

    @Field(() => LocalMinAggregateInput, {nullable:true})
    _min?: LocalMinAggregateInput;

    @Field(() => LocalMaxAggregateInput, {nullable:true})
    _max?: LocalMaxAggregateInput;
}
