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
exports.StringWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const query_mode_enum_1 = require("./query-mode.enum");
const nested_string_with_aggregates_filter_input_1 = require("./nested-string-with-aggregates-filter.input");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_string_filter_input_1 = require("./nested-string-filter.input");
let StringWithAggregatesFilter = class StringWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], StringWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], StringWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => query_mode_enum_1.QueryMode, { nullable: true }),
    __metadata("design:type", Object)
], StringWithAggregatesFilter.prototype, "mode", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_string_with_aggregates_filter_input_1.NestedStringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", nested_string_with_aggregates_filter_input_1.NestedStringWithAggregatesFilter)
], StringWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    __metadata("design:type", nested_int_filter_input_1.NestedIntFilter)
], StringWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_string_filter_input_1.NestedStringFilter, { nullable: true }),
    __metadata("design:type", nested_string_filter_input_1.NestedStringFilter)
], StringWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_string_filter_input_1.NestedStringFilter, { nullable: true }),
    __metadata("design:type", nested_string_filter_input_1.NestedStringFilter)
], StringWithAggregatesFilter.prototype, "_max", void 0);
StringWithAggregatesFilter = __decorate([
    (0, graphql_2.InputType)()
], StringWithAggregatesFilter);
exports.StringWithAggregatesFilter = StringWithAggregatesFilter;
//# sourceMappingURL=string-with-aggregates-filter.input.js.map