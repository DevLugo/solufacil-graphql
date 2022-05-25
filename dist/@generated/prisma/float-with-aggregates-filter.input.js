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
exports.FloatWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const nested_float_with_aggregates_filter_input_1 = require("./nested-float-with-aggregates-filter.input");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_float_filter_input_1 = require("./nested-float-filter.input");
let FloatWithAggregatesFilter = class FloatWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    __metadata("design:type", Number)
], FloatWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Float], { nullable: true }),
    __metadata("design:type", Array)
], FloatWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Float], { nullable: true }),
    __metadata("design:type", Array)
], FloatWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    __metadata("design:type", Number)
], FloatWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    __metadata("design:type", Number)
], FloatWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    __metadata("design:type", Number)
], FloatWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Float, { nullable: true }),
    __metadata("design:type", Number)
], FloatWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_float_with_aggregates_filter_input_1.NestedFloatWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", nested_float_with_aggregates_filter_input_1.NestedFloatWithAggregatesFilter)
], FloatWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    __metadata("design:type", nested_int_filter_input_1.NestedIntFilter)
], FloatWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_float_filter_input_1.NestedFloatFilter, { nullable: true }),
    __metadata("design:type", nested_float_filter_input_1.NestedFloatFilter)
], FloatWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_float_filter_input_1.NestedFloatFilter, { nullable: true }),
    __metadata("design:type", nested_float_filter_input_1.NestedFloatFilter)
], FloatWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_float_filter_input_1.NestedFloatFilter, { nullable: true }),
    __metadata("design:type", nested_float_filter_input_1.NestedFloatFilter)
], FloatWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_float_filter_input_1.NestedFloatFilter, { nullable: true }),
    __metadata("design:type", nested_float_filter_input_1.NestedFloatFilter)
], FloatWithAggregatesFilter.prototype, "_max", void 0);
FloatWithAggregatesFilter = __decorate([
    (0, graphql_2.InputType)()
], FloatWithAggregatesFilter);
exports.FloatWithAggregatesFilter = FloatWithAggregatesFilter;
//# sourceMappingURL=float-with-aggregates-filter.input.js.map