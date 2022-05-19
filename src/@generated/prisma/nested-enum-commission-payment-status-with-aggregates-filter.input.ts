import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentStatus } from './commission-payment-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCommissionPaymentStatusFilter } from './nested-enum-commission-payment-status-filter.input';

@InputType()
export class NestedEnumCommissionPaymentStatusWithAggregatesFilter {

    @Field(() => CommissionPaymentStatus, {nullable:true})
    equals?: keyof typeof CommissionPaymentStatus;

    @Field(() => [CommissionPaymentStatus], {nullable:true})
    in?: Array<keyof typeof CommissionPaymentStatus>;

    @Field(() => [CommissionPaymentStatus], {nullable:true})
    notIn?: Array<keyof typeof CommissionPaymentStatus>;

    @Field(() => NestedEnumCommissionPaymentStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCommissionPaymentStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCommissionPaymentStatusFilter, {nullable:true})
    _min?: NestedEnumCommissionPaymentStatusFilter;

    @Field(() => NestedEnumCommissionPaymentStatusFilter, {nullable:true})
    _max?: NestedEnumCommissionPaymentStatusFilter;
}
