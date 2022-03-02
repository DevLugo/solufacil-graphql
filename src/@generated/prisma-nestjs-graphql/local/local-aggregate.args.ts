import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocalWhereInput } from './local-where.input';
import { LocalOrderByWithRelationInput } from './local-order-by-with-relation.input';
import { LocalWhereUniqueInput } from './local-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LocalCountAggregateInput } from './local-count-aggregate.input';
import { LocalMinAggregateInput } from './local-min-aggregate.input';
import { LocalMaxAggregateInput } from './local-max-aggregate.input';

@ArgsType()
export class LocalAggregateArgs {

    @Field(() => LocalWhereInput, {nullable:true})
    where?: LocalWhereInput;

    @Field(() => [LocalOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LocalOrderByWithRelationInput>;

    @Field(() => LocalWhereUniqueInput, {nullable:true})
    cursor?: LocalWhereUniqueInput;

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
