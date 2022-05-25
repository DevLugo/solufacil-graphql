import { CommissionPaymentStatus } from './commission-payment-status.enum';
import { NestedEnumCommissionPaymentStatusWithAggregatesFilter } from './nested-enum-commission-payment-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCommissionPaymentStatusFilter } from './nested-enum-commission-payment-status-filter.input';
export declare class EnumCommissionPaymentStatusWithAggregatesFilter {
    equals?: keyof typeof CommissionPaymentStatus;
    in?: Array<keyof typeof CommissionPaymentStatus>;
    notIn?: Array<keyof typeof CommissionPaymentStatus>;
    not?: NestedEnumCommissionPaymentStatusWithAggregatesFilter;
    _count?: NestedIntFilter;
    _min?: NestedEnumCommissionPaymentStatusFilter;
    _max?: NestedEnumCommissionPaymentStatusFilter;
}
