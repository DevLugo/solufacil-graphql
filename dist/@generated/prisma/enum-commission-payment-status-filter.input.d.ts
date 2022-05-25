import { CommissionPaymentStatus } from './commission-payment-status.enum';
import { NestedEnumCommissionPaymentStatusFilter } from './nested-enum-commission-payment-status-filter.input';
export declare class EnumCommissionPaymentStatusFilter {
    equals?: keyof typeof CommissionPaymentStatus;
    in?: Array<keyof typeof CommissionPaymentStatus>;
    notIn?: Array<keyof typeof CommissionPaymentStatus>;
    not?: NestedEnumCommissionPaymentStatusFilter;
}
