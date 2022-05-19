import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommissionPaymentStatus } from './commission-payment-status.enum';
import { NestedEnumCommissionPaymentStatusFilter } from './nested-enum-commission-payment-status-filter.input';

@InputType()
export class EnumCommissionPaymentStatusFilter {

    @Field(() => CommissionPaymentStatus, {nullable:true})
    equals?: keyof typeof CommissionPaymentStatus;

    @Field(() => [CommissionPaymentStatus], {nullable:true})
    in?: Array<keyof typeof CommissionPaymentStatus>;

    @Field(() => [CommissionPaymentStatus], {nullable:true})
    notIn?: Array<keyof typeof CommissionPaymentStatus>;

    @Field(() => NestedEnumCommissionPaymentStatusFilter, {nullable:true})
    not?: NestedEnumCommissionPaymentStatusFilter;
}
