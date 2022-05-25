import { PaymentState } from './payment-state.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPaymentStateFilter } from './nested-enum-payment-state-filter.input';
export declare class NestedEnumPaymentStateWithAggregatesFilter {
    equals?: keyof typeof PaymentState;
    in?: Array<keyof typeof PaymentState>;
    notIn?: Array<keyof typeof PaymentState>;
    not?: NestedEnumPaymentStateWithAggregatesFilter;
    _count?: NestedIntFilter;
    _min?: NestedEnumPaymentStateFilter;
    _max?: NestedEnumPaymentStateFilter;
}
