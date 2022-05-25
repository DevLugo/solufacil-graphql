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
var NestedDecimalWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedDecimalWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const runtime_1 = require("@prisma/client/runtime");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_decimal_filter_input_1 = require("./nested-decimal-filter.input");
let NestedDecimalWithAggregatesFilter = NestedDecimalWithAggregatesFilter_1 = class NestedDecimalWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: true }),
    __metadata("design:type", runtime_1.Decimal)
], NestedDecimalWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [prisma_graphql_type_decimal_1.GraphQLDecimal], { nullable: true }),
    __metadata("design:type", Array)
], NestedDecimalWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [prisma_graphql_type_decimal_1.GraphQLDecimal], { nullable: true }),
    __metadata("design:type", Array)
], NestedDecimalWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: true }),
    __metadata("design:type", runtime_1.Decimal)
], NestedDecimalWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: true }),
    __metadata("design:type", runtime_1.Decimal)
], NestedDecimalWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: true }),
    __metadata("design:type", runtime_1.Decimal)
], NestedDecimalWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: true }),
    __metadata("design:type", runtime_1.Decimal)
], NestedDecimalWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDecimalWithAggregatesFilter_1, { nullable: true }),
    __metadata("design:type", NestedDecimalWithAggregatesFilter)
], NestedDecimalWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    __metadata("design:type", nested_int_filter_input_1.NestedIntFilter)
], NestedDecimalWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_decimal_filter_input_1.NestedDecimalFilter, { nullable: true }),
    __metadata("design:type", nested_decimal_filter_input_1.NestedDecimalFilter)
], NestedDecimalWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_decimal_filter_input_1.NestedDecimalFilter, { nullable: true }),
    __metadata("design:type", nested_decimal_filter_input_1.NestedDecimalFilter)
], NestedDecimalWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_decimal_filter_input_1.NestedDecimalFilter, { nullable: true }),
    __metadata("design:type", nested_decimal_filter_input_1.NestedDecimalFilter)
], NestedDecimalWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_decimal_filter_input_1.NestedDecimalFilter, { nullable: true }),
    __metadata("design:type", nested_decimal_filter_input_1.NestedDecimalFilter)
], NestedDecimalWithAggregatesFilter.prototype, "_max", void 0);
NestedDecimalWithAggregatesFilter = NestedDecimalWithAggregatesFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedDecimalWithAggregatesFilter);
exports.NestedDecimalWithAggregatesFilter = NestedDecimalWithAggregatesFilter;
//# sourceMappingURL=nested-decimal-with-aggregates-filter.input.js.map