import { Decimal } from '@prisma/client/runtime';
import { NestedDecimalFilter } from './nested-decimal-filter.input';
export declare class DecimalFilter {
    equals?: Decimal;
    in?: Array<Decimal>;
    notIn?: Array<Decimal>;
    lt?: Decimal;
    lte?: Decimal;
    gt?: Decimal;
    gte?: Decimal;
    not?: NestedDecimalFilter;
}
