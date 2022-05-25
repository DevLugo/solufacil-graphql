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
var NestedDateTimeNullableWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedDateTimeNullableWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nested_int_nullable_filter_input_1 = require("./nested-int-nullable-filter.input");
const nested_date_time_nullable_filter_input_1 = require("./nested-date-time-nullable-filter.input");
let NestedDateTimeNullableWithAggregatesFilter = NestedDateTimeNullableWithAggregatesFilter_1 = class NestedDateTimeNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], NestedDateTimeNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true }),
    __metadata("design:type", Array)
], NestedDateTimeNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true }),
    __metadata("design:type", Array)
], NestedDateTimeNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], NestedDateTimeNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], NestedDateTimeNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], NestedDateTimeNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], NestedDateTimeNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeNullableWithAggregatesFilter_1, { nullable: true }),
    __metadata("design:type", NestedDateTimeNullableWithAggregatesFilter)
], NestedDateTimeNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    __metadata("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], NestedDateTimeNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_date_time_nullable_filter_input_1.NestedDateTimeNullableFilter, { nullable: true }),
    __metadata("design:type", nested_date_time_nullable_filter_input_1.NestedDateTimeNullableFilter)
], NestedDateTimeNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_date_time_nullable_filter_input_1.NestedDateTimeNullableFilter, { nullable: true }),
    __metadata("design:type", nested_date_time_nullable_filter_input_1.NestedDateTimeNullableFilter)
], NestedDateTimeNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedDateTimeNullableWithAggregatesFilter = NestedDateTimeNullableWithAggregatesFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedDateTimeNullableWithAggregatesFilter);
exports.NestedDateTimeNullableWithAggregatesFilter = NestedDateTimeNullableWithAggregatesFilter;
//# sourceMappingURL=nested-date-time-nullable-with-aggregates-filter.input.js.map