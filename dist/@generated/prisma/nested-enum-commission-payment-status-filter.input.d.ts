import { CommissionPaymentStatus } from './commission-payment-status.enum';
export declare class NestedEnumCommissionPaymentStatusFilter {
    equals?: keyof typeof CommissionPaymentStatus;
    in?: Array<keyof typeof CommissionPaymentStatus>;
    notIn?: Array<keyof typeof CommissionPaymentStatus>;
    not?: NestedEnumCommissionPaymentStatusFilter;
}
