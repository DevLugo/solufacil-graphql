import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoanWhereInput } from './loan-where.input';
import { LoanOrderByWithRelationInput } from './loan-order-by-with-relation.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LoanCountAggregateInput } from './loan-count-aggregate.input';
import { LoanAvgAggregateInput } from './loan-avg-aggregate.input';
import { LoanSumAggregateInput } from './loan-sum-aggregate.input';
import { LoanMinAggregateInput } from './loan-min-aggregate.input';
import { LoanMaxAggregateInput } from './loan-max-aggregate.input';

@ArgsType()
export class LoanAggregateArgs {

    @Field(() => LoanWhereInput, {nullable:true})
    where?: LoanWhereInput;

    @Field(() => [LoanOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LoanOrderByWithRelationInput>;

    @Field(() => LoanWhereUniqueInput, {nullable:true})
    cursor?: LoanWhereUniqueInput;

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
