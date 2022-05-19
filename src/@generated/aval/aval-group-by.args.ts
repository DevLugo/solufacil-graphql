import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvalWhereInput } from './aval-where.input';
import { AvalOrderByWithAggregationInput } from './aval-order-by-with-aggregation.input';
import { AvalScalarFieldEnum } from './aval-scalar-field.enum';
import { AvalScalarWhereWithAggregatesInput } from './aval-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AvalCountAggregateInput } from './aval-count-aggregate.input';
import { AvalMinAggregateInput } from './aval-min-aggregate.input';
import { AvalMaxAggregateInput } from './aval-max-aggregate.input';

@ArgsType()
export class AvalGroupByArgs {

    @Field(() => AvalWhereInput, {nullable:true})
    where?: AvalWhereInput;

    @Field(() => [AvalOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AvalOrderByWithAggregationInput>;

    @Field(() => [AvalScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AvalScalarFieldEnum>;

    @Field(() => AvalScalarWhereWithAggregatesInput, {nullable:true})
    having?: AvalScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AvalCountAggregateInput, {nullable:true})
    _count?: AvalCountAggregateInput;

    @Field(() => AvalMinAggregateInput, {nullable:true})
    _min?: AvalMinAggregateInput;

    @Field(() => AvalMaxAggregateInput, {nullable:true})
    _max?: AvalMaxAggregateInput;
}
