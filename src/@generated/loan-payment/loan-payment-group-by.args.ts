import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoanPaymentWhereInput } from './loan-payment-where.input';
import { LoanPaymentOrderByWithAggregationInput } from './loan-payment-order-by-with-aggregation.input';
import { LoanPaymentScalarFieldEnum } from './loan-payment-scalar-field.enum';
import { LoanPaymentScalarWhereWithAggregatesInput } from './loan-payment-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LoanPaymentCountAggregateInput } from './loan-payment-count-aggregate.input';
import { LoanPaymentAvgAggregateInput } from './loan-payment-avg-aggregate.input';
import { LoanPaymentSumAggregateInput } from './loan-payment-sum-aggregate.input';
import { LoanPaymentMinAggregateInput } from './loan-payment-min-aggregate.input';
import { LoanPaymentMaxAggregateInput } from './loan-payment-max-aggregate.input';

@ArgsType()
export class LoanPaymentGroupByArgs {

    @Field(() => LoanPaymentWhereInput, {nullable:true})
    where?: LoanPaymentWhereInput;

    @Field(() => [LoanPaymentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LoanPaymentOrderByWithAggregationInput>;

    @Field(() => [LoanPaymentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LoanPaymentScalarFieldEnum>;

    @Field(() => LoanPaymentScalarWhereWithAggregatesInput, {nullable:true})
    having?: LoanPaymentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LoanPaymentCountAggregateInput, {nullable:true})
    _count?: LoanPaymentCountAggregateInput;

    @Field(() => LoanPaymentAvgAggregateInput, {nullable:true})
    _avg?: LoanPaymentAvgAggregateInput;

    @Field(() => LoanPaymentSumAggregateInput, {nullable:true})
    _sum?: LoanPaymentSumAggregateInput;

    @Field(() => LoanPaymentMinAggregateInput, {nullable:true})
    _min?: LoanPaymentMinAggregateInput;

    @Field(() => LoanPaymentMaxAggregateInput, {nullable:true})
    _max?: LoanPaymentMaxAggregateInput;
}
