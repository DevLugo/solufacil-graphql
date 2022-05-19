import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoanPaymentWhereInput } from './loan-payment-where.input';
import { LoanPaymentOrderByWithRelationInput } from './loan-payment-order-by-with-relation.input';
import { LoanPaymentWhereUniqueInput } from './loan-payment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LoanPaymentCountAggregateInput } from './loan-payment-count-aggregate.input';
import { LoanPaymentAvgAggregateInput } from './loan-payment-avg-aggregate.input';
import { LoanPaymentSumAggregateInput } from './loan-payment-sum-aggregate.input';
import { LoanPaymentMinAggregateInput } from './loan-payment-min-aggregate.input';
import { LoanPaymentMaxAggregateInput } from './loan-payment-max-aggregate.input';

@ArgsType()
export class LoanPaymentAggregateArgs {

    @Field(() => LoanPaymentWhereInput, {nullable:true})
    where?: LoanPaymentWhereInput;

    @Field(() => [LoanPaymentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LoanPaymentOrderByWithRelationInput>;

    @Field(() => LoanPaymentWhereUniqueInput, {nullable:true})
    cursor?: LoanPaymentWhereUniqueInput;

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
