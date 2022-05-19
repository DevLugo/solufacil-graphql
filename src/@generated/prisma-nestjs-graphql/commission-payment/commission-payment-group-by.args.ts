import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommissionPaymentWhereInput } from './commission-payment-where.input';
import { CommissionPaymentOrderByWithAggregationInput } from './commission-payment-order-by-with-aggregation.input';
import { CommissionPaymentScalarFieldEnum } from './commission-payment-scalar-field.enum';
import { CommissionPaymentScalarWhereWithAggregatesInput } from './commission-payment-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CommissionPaymentCountAggregateInput } from './commission-payment-count-aggregate.input';
import { CommissionPaymentAvgAggregateInput } from './commission-payment-avg-aggregate.input';
import { CommissionPaymentSumAggregateInput } from './commission-payment-sum-aggregate.input';
import { CommissionPaymentMinAggregateInput } from './commission-payment-min-aggregate.input';
import { CommissionPaymentMaxAggregateInput } from './commission-payment-max-aggregate.input';

@ArgsType()
export class CommissionPaymentGroupByArgs {

    @Field(() => CommissionPaymentWhereInput, {nullable:true})
    where?: CommissionPaymentWhereInput;

    @Field(() => [CommissionPaymentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CommissionPaymentOrderByWithAggregationInput>;

    @Field(() => [CommissionPaymentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CommissionPaymentScalarFieldEnum>;

    @Field(() => CommissionPaymentScalarWhereWithAggregatesInput, {nullable:true})
    having?: CommissionPaymentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CommissionPaymentCountAggregateInput, {nullable:true})
    _count?: CommissionPaymentCountAggregateInput;

    @Field(() => CommissionPaymentAvgAggregateInput, {nullable:true})
    _avg?: CommissionPaymentAvgAggregateInput;

    @Field(() => CommissionPaymentSumAggregateInput, {nullable:true})
    _sum?: CommissionPaymentSumAggregateInput;

    @Field(() => CommissionPaymentMinAggregateInput, {nullable:true})
    _min?: CommissionPaymentMinAggregateInput;

    @Field(() => CommissionPaymentMaxAggregateInput, {nullable:true})
    _max?: CommissionPaymentMaxAggregateInput;
}
