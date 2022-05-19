import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BorrowerWhereInput } from './borrower-where.input';
import { BorrowerOrderByWithAggregationInput } from './borrower-order-by-with-aggregation.input';
import { BorrowerScalarFieldEnum } from './borrower-scalar-field.enum';
import { BorrowerScalarWhereWithAggregatesInput } from './borrower-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BorrowerCountAggregateInput } from './borrower-count-aggregate.input';
import { BorrowerMinAggregateInput } from './borrower-min-aggregate.input';
import { BorrowerMaxAggregateInput } from './borrower-max-aggregate.input';

@ArgsType()
export class BorrowerGroupByArgs {

    @Field(() => BorrowerWhereInput, {nullable:true})
    where?: BorrowerWhereInput;

    @Field(() => [BorrowerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BorrowerOrderByWithAggregationInput>;

    @Field(() => [BorrowerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BorrowerScalarFieldEnum>;

    @Field(() => BorrowerScalarWhereWithAggregatesInput, {nullable:true})
    having?: BorrowerScalarWhereWithAggregatesInput;

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
