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
exports.DecimalFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const runtime_1 = require("@prisma/client/runtime");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const nested_decimal_filter_input_1 = require("./nested-decimal-filter.input");
let DecimalFilter = class DecimalFilter {
};
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: true }),
    __metadata("design:type", runtime_1.Decimal)
], DecimalFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [prisma_graphql_type_decimal_1.GraphQLDecimal], { nullable: true }),
    __metadata("design:type", Array)
], DecimalFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [prisma_graphql_type_decimal_1.GraphQLDecimal], { nullable: true }),
    __metadata("design:type", Array)
], DecimalFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: true }),
    __metadata("design:type", runtime_1.Decimal)
], DecimalFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: true }),
    __metadata("design:type", runtime_1.Decimal)
], DecimalFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: true }),
    __metadata("design:type", runtime_1.Decimal)
], DecimalFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: true }),
    __metadata("design:type", runtime_1.Decimal)
], DecimalFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_decimal_filter_input_1.NestedDecimalFilter, { nullable: true }),
    __metadata("design:type", nested_decimal_filter_input_1.NestedDecimalFilter)
], DecimalFilter.prototype, "not", void 0);
DecimalFilter = __decorate([
    (0, graphql_2.InputType)()
], DecimalFilter);
exports.DecimalFilter = DecimalFilter;
//# sourceMappingURL=decimal-filter.input.js.map