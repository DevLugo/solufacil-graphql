import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoanWhereInput } from './loan-where.input';
import { LoanOrderByWithAggregationInput } from './loan-order-by-with-aggregation.input';
import { LoanScalarFieldEnum } from './loan-scalar-field.enum';
import { LoanScalarWhereWithAggregatesInput } from './loan-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LoanCountAggregateInput } from './loan-count-aggregate.input';
import { LoanAvgAggregateInput } from './loan-avg-aggregate.input';
import { LoanSumAggregateInput } from './loan-sum-aggregate.input';
import { LoanMinAggregateInput } from './loan-min-aggregate.input';
import { LoanMaxAggregateInput } from './loan-max-aggregate.input';

@ArgsType()
export class LoanGroupByArgs {

    @Field(() => LoanWhereInput, {nullable:true})
    where?: LoanWhereInput;

    @Field(() => [LoanOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LoanOrderByWithAggregationInput>;

    @Field(() => [LoanScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LoanScalarFieldEnum>;

    @Field(() => LoanScalarWhereWithAggregatesInput, {nullable:true})
    having?: LoanScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LoanCountAggregateInput, {nullable:true})
    _count?: LoanCountAggregateInput;

    @Field(() => LoanAvgAggregateInput, {nullable:true})
    _avg?: LoanAvgAggregateInput;

    @Field(() => LoanSumAggregateInput, {nullable:true})
    _sum?: LoanSumAggregateInput;

    @Field(() => LoanMinAggregateInput, {nullable:true})
    _min?: LoanMinAggregateInput;

    @Field(() => LoanMaxAggregateInput, {nullable:true})
    _max?: LoanMaxAggregateInput;
}
