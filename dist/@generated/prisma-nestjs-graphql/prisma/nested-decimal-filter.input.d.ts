import { Decimal } from '@prisma/client/runtime';
export declare class NestedDecimalFilter {
    equals?: Decimal;
    in?: Array<Decimal>;
    notIn?: Array<Decimal>;
    lt?: Decimal;
    lte?: Decimal;
    gt?: Decimal;
    gte?: Decimal;
    not?: NestedDecimalFilter;
}
