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
exports.StringNullableFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const query_mode_enum_1 = require("./query-mode.enum");
const nested_string_nullable_filter_input_1 = require("./nested-string-nullable-filter.input");
let StringNullableFilter = class StringNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], StringNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], StringNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], StringNullableFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => query_mode_enum_1.QueryMode, { nullable: true }),
    __metadata("design:type", Object)
], StringNullableFilter.prototype, "mode", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_string_nullable_filter_input_1.NestedStringNullableFilter, { nullable: true }),
    __metadata("design:type", nested_string_nullable_filter_input_1.NestedStringNullableFilter)
], StringNullableFilter.prototype, "not", void 0);
StringNullableFilter = __decorate([
    (0, graphql_2.InputType)()
], StringNullableFilter);
exports.StringNullableFilter = StringNullableFilter;
//# sourceMappingURL=string-nullable-filter.input.js.map