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
var PaymentScheduleScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentScheduleScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
const decimal_with_aggregates_filter_input_1 = require("../prisma/decimal-with-aggregates-filter.input");
const enum_payment_state_with_aggregates_filter_input_1 = require("../prisma/enum-payment-state-with-aggregates-filter.input");
const graphql_3 = require("@nestjs/graphql");
const bool_with_aggregates_filter_input_1 = require("../prisma/bool-with-aggregates-filter.input");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
const string_nullable_with_aggregates_filter_input_1 = require("../prisma/string-nullable-with-aggregates-filter.input");
let PaymentScheduleScalarWhereWithAggregatesInput = PaymentScheduleScalarWhereWithAggregatesInput_1 = class PaymentScheduleScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [PaymentScheduleScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PaymentScheduleScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PaymentScheduleScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], PaymentScheduleScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", int_with_aggregates_filter_input_1.IntWithAggregatesFilter)
], PaymentScheduleScalarWhereWithAggregatesInput.prototype, "numeration", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_with_aggregates_filter_input_1.DecimalWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", decimal_with_aggregates_filter_input_1.DecimalWithAggregatesFilter)
], PaymentScheduleScalarWhereWithAggregatesInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_with_aggregates_filter_input_1.DecimalWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", decimal_with_aggregates_filter_input_1.DecimalWithAggregatesFilter)
], PaymentScheduleScalarWhereWithAggregatesInput.prototype, "paidAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_with_aggregates_filter_input_1.DecimalWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", decimal_with_aggregates_filter_input_1.DecimalWithAggregatesFilter)
], PaymentScheduleScalarWhereWithAggregatesInput.prototype, "returnToCapital", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_with_aggregates_filter_input_1.DecimalWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", decimal_with_aggregates_filter_input_1.DecimalWithAggregatesFilter)
], PaymentScheduleScalarWhereWithAggregatesInput.prototype, "profit", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", enum_payment_state_with_aggregates_filter_input_1.EnumPaymentStateWithAggregatesFilter)
], PaymentScheduleScalarWhereWithAggregatesInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_with_aggregates_filter_input_1.BoolWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", bool_with_aggregates_filter_input_1.BoolWithAggregatesFilter)
], PaymentScheduleScalarWhereWithAggregatesInput.prototype, "delayed", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], PaymentScheduleScalarWhereWithAggregatesInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_nullable_with_aggregates_filter_input_1.StringNullableWithAggregatesFilter)
], PaymentScheduleScalarWhereWithAggregatesInput.prototype, "details", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], PaymentScheduleScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], PaymentScheduleScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], PaymentScheduleScalarWhereWithAggregatesInput.prototype, "loanId", void 0);
PaymentScheduleScalarWhereWithAggregatesInput = PaymentScheduleScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], PaymentScheduleScalarWhereWithAggregatesInput);
exports.PaymentScheduleScalarWhereWithAggregatesInput = PaymentScheduleScalarWhereWithAggregatesInput;
//# sourceMappingURL=payment-schedule-scalar-where-with-aggregates.input.js.map