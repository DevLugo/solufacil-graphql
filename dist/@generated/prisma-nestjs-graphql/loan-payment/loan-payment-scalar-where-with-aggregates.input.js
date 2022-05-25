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
var LoanPaymentScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanPaymentScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
const decimal_with_aggregates_filter_input_1 = require("../prisma/decimal-with-aggregates-filter.input");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
const string_nullable_with_aggregates_filter_input_1 = require("../prisma/string-nullable-with-aggregates-filter.input");
const graphql_3 = require("@nestjs/graphql");
let LoanPaymentScalarWhereWithAggregatesInput = LoanPaymentScalarWhereWithAggregatesInput_1 = class LoanPaymentScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [LoanPaymentScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LoanPaymentScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LoanPaymentScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], LoanPaymentScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_with_aggregates_filter_input_1.DecimalWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", decimal_with_aggregates_filter_input_1.DecimalWithAggregatesFilter)
], LoanPaymentScalarWhereWithAggregatesInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], LoanPaymentScalarWhereWithAggregatesInput.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter)
], LoanPaymentScalarWhereWithAggregatesInput.prototype, "comments", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], LoanPaymentScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], LoanPaymentScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], LoanPaymentScalarWhereWithAggregatesInput.prototype, "loanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], LoanPaymentScalarWhereWithAggregatesInput.prototype, "employeeId", void 0);
LoanPaymentScalarWhereWithAggregatesInput = LoanPaymentScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], LoanPaymentScalarWhereWithAggregatesInput);
exports.LoanPaymentScalarWhereWithAggregatesInput = LoanPaymentScalarWhereWithAggregatesInput;
//# sourceMappingURL=loan-payment-scalar-where-with-aggregates.input.js.map