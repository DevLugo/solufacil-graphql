import { PaymentState } from './payment-state.enum';
import { NestedEnumPaymentStateFilter } from './nested-enum-payment-state-filter.input';
export declare class EnumPaymentStateFilter {
    equals?: keyof typeof PaymentState;
    in?: Array<keyof typeof PaymentState>;
    notIn?: Array<keyof typeof PaymentState>;
    not?: NestedEnumPaymentStateFilter;
}
