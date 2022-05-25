import { NestedFloatFilter } from './nested-float-filter.input';
export declare class FloatFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedFloatFilter;
}
