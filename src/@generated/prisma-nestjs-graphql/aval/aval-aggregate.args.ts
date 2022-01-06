import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvalWhereInput } from './aval-where.input';
import { AvalOrderByWithRelationInput } from './aval-order-by-with-relation.input';
import { AvalWhereUniqueInput } from './aval-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AvalCountAggregateInput } from './aval-count-aggregate.input';
import { AvalMinAggregateInput } from './aval-min-aggregate.input';
import { AvalMaxAggregateInput } from './aval-max-aggregate.input';

@ArgsType()
export class AvalAggregateArgs {

    @Field(() => AvalWhereInput, {nullable:true})
    where?: AvalWhereInput;

    @Field(() => [AvalOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AvalOrderByWithRelationInput>;

    @Field(() => AvalWhereUniqueInput, {nullable:true})
    cursor?: AvalWhereUniqueInput;

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
