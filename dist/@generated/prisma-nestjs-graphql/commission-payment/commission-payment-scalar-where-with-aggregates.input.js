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
var CommissionPaymentScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionPaymentScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
const decimal_with_aggregates_filter_input_1 = require("../prisma/decimal-with-aggregates-filter.input");
const string_nullable_with_aggregates_filter_input_1 = require("../prisma/string-nullable-with-aggregates-filter.input");
const enum_commission_payment_status_with_aggregates_filter_input_1 = require("../prisma/enum-commission-payment-status-with-aggregates-filter.input");
let CommissionPaymentScalarWhereWithAggregatesInput = CommissionPaymentScalarWhereWithAggregatesInput_1 = class CommissionPaymentScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [CommissionPaymentScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CommissionPaymentScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CommissionPaymentScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], CommissionPaymentScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_with_aggregates_filter_input_1.DecimalWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", decimal_with_aggregates_filter_input_1.DecimalWithAggregatesFilter)
], CommissionPaymentScalarWhereWithAggregatesInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter)
], CommissionPaymentScalarWhereWithAggregatesInput.prototype, "loanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], CommissionPaymentScalarWhereWithAggregatesInput.prototype, "paymentScheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], CommissionPaymentScalarWhereWithAggregatesInput.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_commission_payment_status_with_aggregates_filter_input_1.EnumCommissionPaymentStatusWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", enum_commission_payment_status_with_aggregates_filter_input_1.EnumCommissionPaymentStatusWithAggregatesFilter)
], CommissionPaymentScalarWhereWithAggregatesInput.prototype, "status", void 0);
CommissionPaymentScalarWhereWithAggregatesInput = CommissionPaymentScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], CommissionPaymentScalarWhereWithAggregatesInput);
exports.CommissionPaymentScalarWhereWithAggregatesInput = CommissionPaymentScalarWhereWithAggregatesInput;
//# sourceMappingURL=commission-payment-scalar-where-with-aggregates.input.js.map