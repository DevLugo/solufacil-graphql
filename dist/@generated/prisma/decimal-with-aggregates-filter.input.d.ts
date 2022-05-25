import { Decimal } from '@prisma/client/runtime';
import { NestedDecimalWithAggregatesFilter } from './nested-decimal-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedDecimalFilter } from './nested-decimal-filter.input';
export declare class DecimalWithAggregatesFilter {
    equals?: Decimal;
    in?: Array<Decimal>;
    notIn?: Array<Decimal>;
    lt?: Decimal;
    lte?: Decimal;
    gt?: Decimal;
    gte?: Decimal;
    not?: NestedDecimalWithAggregatesFilter;
    _count?: NestedIntFilter;
    _avg?: NestedDecimalFilter;
    _sum?: NestedDecimalFilter;
    _min?: NestedDecimalFilter;
    _max?: NestedDecimalFilter;
}
