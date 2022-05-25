"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeNullableWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nested_date_time_nullable_with_aggregates_filter_input_1 = require("./nested-date-time-nullable-with-aggregates-filter.input");
const nested_int_nullable_filter_input_1 = require("./nested-int-nullable-filter.input");
const nested_date_time_nullable_filter_input_1 = require("./nested-date-time-nullable-filter.input");
let DateTimeNullableWithAggregatesFilter = class DateTimeNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], DateTimeNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true }),
    __metadata("design:type", Array)
], DateTimeNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true }),
    __metadata("design:type", Array)
], DateTimeNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], DateTimeNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], DateTimeNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], DateTimeNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], DateTimeNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_date_time_nullable_with_aggregates_filter_input_1.NestedDateTimeNullableWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", nested_date_time_nullable_with_aggregates_filter_input_1.NestedDateTimeNullableWithAggregatesFilter)
], DateTimeNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    __metadata("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], DateTimeNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_date_time_nullable_filter_input_1.NestedDateTimeNullableFilter, { nullable: true }),
    __metadata("design:type", nested_date_time_nullable_filter_input_1.NestedDateTimeNullableFilter)
], DateTimeNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_date_time_nullable_filter_input_1.NestedDateTimeNullableFilter, { nullable: true }),
    __metadata("design:type", nested_date_time_nullable_filter_input_1.NestedDateTimeNullableFilter)
], DateTimeNullableWithAggregatesFilter.prototype, "_max", void 0);
DateTimeNullableWithAggregatesFilter = __decorate([
    (0, graphql_2.InputType)()
], DateTimeNullableWithAggregatesFilter);
exports.DateTimeNullableWithAggregatesFilter = DateTimeNullableWithAggregatesFilter;
//# sourceMappingURL=date-time-nullable-with-aggregates-filter.input.js.map