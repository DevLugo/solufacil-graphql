import { NestedDateTimeNullableFilter } from './nested-date-time-nullable-filter.input';
export declare class DateTimeNullableFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeNullableFilter;
}
