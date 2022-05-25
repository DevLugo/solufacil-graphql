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
var PaymentScheduleScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentScheduleScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const int_filter_input_1 = require("../prisma/int-filter.input");
const decimal_filter_input_1 = require("../prisma/decimal-filter.input");
const enum_payment_state_filter_input_1 = require("../prisma/enum-payment-state-filter.input");
const graphql_3 = require("@nestjs/graphql");
const bool_filter_input_1 = require("../prisma/bool-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
let PaymentScheduleScalarWhereInput = PaymentScheduleScalarWhereInput_1 = class PaymentScheduleScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [PaymentScheduleScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PaymentScheduleScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PaymentScheduleScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], PaymentScheduleScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], PaymentScheduleScalarWhereInput.prototype, "numeration", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_filter_input_1.DecimalFilter, { nullable: true }),
    __metadata("design:type", decimal_filter_input_1.DecimalFilter)
], PaymentScheduleScalarWhereInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_filter_input_1.DecimalFilter, { nullable: true }),
    __metadata("design:type", decimal_filter_input_1.DecimalFilter)
], PaymentScheduleScalarWhereInput.prototype, "paidAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_filter_input_1.DecimalFilter, { nullable: true }),
    __metadata("design:type", decimal_filter_input_1.DecimalFilter)
], PaymentScheduleScalarWhereInput.prototype, "returnToCapital", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_filter_input_1.DecimalFilter, { nullable: true }),
    __metadata("design:type", decimal_filter_input_1.DecimalFilter)
], PaymentScheduleScalarWhereInput.prototype, "profit", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", enum_payment_state_filter_input_1.EnumPaymentStateFilter)
], PaymentScheduleScalarWhereInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => bool_filter_input_1.BoolFilter, { nullable: true }),
    __metadata("design:type", bool_filter_input_1.BoolFilter)
], PaymentScheduleScalarWhereInput.prototype, "delayed", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], PaymentScheduleScalarWhereInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], PaymentScheduleScalarWhereInput.prototype, "details", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], PaymentScheduleScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], PaymentScheduleScalarWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], PaymentScheduleScalarWhereInput.prototype, "loanId", void 0);
PaymentScheduleScalarWhereInput = PaymentScheduleScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], PaymentScheduleScalarWhereInput);
exports.PaymentScheduleScalarWhereInput = PaymentScheduleScalarWhereInput;
//# sourceMappingURL=payment-schedule-scalar-where.input.js.map