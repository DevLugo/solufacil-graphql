import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BorrowerWhereInput } from './borrower-where.input';
import { BorrowerOrderByWithRelationInput } from './borrower-order-by-with-relation.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BorrowerCountAggregateInput } from './borrower-count-aggregate.input';
import { BorrowerMinAggregateInput } from './borrower-min-aggregate.input';
import { BorrowerMaxAggregateInput } from './borrower-max-aggregate.input';

@ArgsType()
export class BorrowerAggregateArgs {

    @Field(() => BorrowerWhereInput, {nullable:true})
    where?: BorrowerWhereInput;

    @Field(() => [BorrowerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BorrowerOrderByWithRelationInput>;

    @Field(() => BorrowerWhereUniqueInput, {nullable:true})
    cursor?: BorrowerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BorrowerCountAggregateInput, {nullable:true})
    _count?: BorrowerCountAggregateInput;

    @Field(() => BorrowerMinAggregateInput, {nullable:true})
    _min?: BorrowerMinAggregateInput;

    @Field(() => BorrowerMaxAggregateInput, {nullable:true})
    _max?: BorrowerMaxAggregateInput;
}
