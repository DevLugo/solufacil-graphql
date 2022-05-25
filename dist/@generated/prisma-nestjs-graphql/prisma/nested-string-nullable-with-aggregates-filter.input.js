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
var NestedStringNullableWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedStringNullableWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nested_int_nullable_filter_input_1 = require("./nested-int-nullable-filter.input");
const nested_string_nullable_filter_input_1 = require("./nested-string-nullable-filter.input");
let NestedStringNullableWithAggregatesFilter = NestedStringNullableWithAggregatesFilter_1 = class NestedStringNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], NestedStringNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], NestedStringNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], NestedStringNullableWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableWithAggregatesFilter_1, { nullable: true }),
    __metadata("design:type", NestedStringNullableWithAggregatesFilter)
], NestedStringNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_nullable_filter_input_1.NestedIntNullableFilter, { nullable: true }),
    __metadata("design:type", nested_int_nullable_filter_input_1.NestedIntNullableFilter)
], NestedStringNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_string_nullable_filter_input_1.NestedStringNullableFilter, { nullable: true }),
    __metadata("design:type", nested_string_nullable_filter_input_1.NestedStringNullableFilter)
], NestedStringNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_string_nullable_filter_input_1.NestedStringNullableFilter, { nullable: true }),
    __metadata("design:type", nested_string_nullable_filter_input_1.NestedStringNullableFilter)
], NestedStringNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedStringNullableWithAggregatesFilter = NestedStringNullableWithAggregatesFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedStringNullableWithAggregatesFilter);
exports.NestedStringNullableWithAggregatesFilter = NestedStringNullableWithAggregatesFilter;
//# sourceMappingURL=nested-string-nullable-with-aggregates-filter.input.js.map