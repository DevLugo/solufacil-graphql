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
var ContractTypeScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractTypeScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
const decimal_with_aggregates_filter_input_1 = require("../prisma/decimal-with-aggregates-filter.input");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
const graphql_3 = require("@nestjs/graphql");
const date_time_nullable_with_aggregates_filter_input_1 = require("../prisma/date-time-nullable-with-aggregates-filter.input");
let ContractTypeScalarWhereWithAggregatesInput = ContractTypeScalarWhereWithAggregatesInput_1 = class ContractTypeScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [ContractTypeScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ContractTypeScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ContractTypeScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ContractTypeScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [ContractTypeScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], ContractTypeScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], ContractTypeScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], ContractTypeScalarWhereWithAggregatesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", int_with_aggregates_filter_input_1.IntWithAggregatesFilter)
], ContractTypeScalarWhereWithAggregatesInput.prototype, "monthDuration", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_with_aggregates_filter_input_1.DecimalWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", decimal_with_aggregates_filter_input_1.DecimalWithAggregatesFilter)
], ContractTypeScalarWhereWithAggregatesInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_with_aggregates_filter_input_1.DecimalWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", decimal_with_aggregates_filter_input_1.DecimalWithAggregatesFilter)
], ContractTypeScalarWhereWithAggregatesInput.prototype, "maxRate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], ContractTypeScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_nullable_with_aggregates_filter_input_1.DateTimeNullableWithAggregatesFilter)
], ContractTypeScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
ContractTypeScalarWhereWithAggregatesInput = ContractTypeScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], ContractTypeScalarWhereWithAggregatesInput);
exports.ContractTypeScalarWhereWithAggregatesInput = ContractTypeScalarWhereWithAggregatesInput;
//# sourceMappingURL=contract-type-scalar-where-with-aggregates.input.js.map