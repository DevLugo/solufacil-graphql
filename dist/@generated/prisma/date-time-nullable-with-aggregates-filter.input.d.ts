import { NestedDateTimeNullableWithAggregatesFilter } from './nested-date-time-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedDateTimeNullableFilter } from './nested-date-time-nullable-filter.input';
export declare class DateTimeNullableWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeNullableWithAggregatesFilter;
    _count?: NestedIntNullableFilter;
    _min?: NestedDateTimeNullableFilter;
    _max?: NestedDateTimeNullableFilter;
}
