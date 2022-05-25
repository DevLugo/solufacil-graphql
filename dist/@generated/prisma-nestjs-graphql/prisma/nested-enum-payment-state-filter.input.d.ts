import { PaymentState } from './payment-state.enum';
export declare class NestedEnumPaymentStateFilter {
    equals?: keyof typeof PaymentState;
    in?: Array<keyof typeof PaymentState>;
    notIn?: Array<keyof typeof PaymentState>;
    not?: NestedEnumPaymentStateFilter;
}
