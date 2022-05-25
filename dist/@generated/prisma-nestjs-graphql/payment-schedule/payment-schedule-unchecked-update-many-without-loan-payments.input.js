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
exports.PaymentScheduleUncheckedUpdateManyWithoutLoanPaymentsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const payment_schedule_create_without_loan_payments_input_1 = require("./payment-schedule-create-without-loan-payments.input");
const payment_schedule_create_or_connect_without_loan_payments_input_1 = require("./payment-schedule-create-or-connect-without-loan-payments.input");
const payment_schedule_upsert_with_where_unique_without_loan_payments_input_1 = require("./payment-schedule-upsert-with-where-unique-without-loan-payments.input");
const payment_schedule_where_unique_input_1 = require("./payment-schedule-where-unique.input");
const payment_schedule_update_with_where_unique_without_loan_payments_input_1 = require("./payment-schedule-update-with-where-unique-without-loan-payments.input");
const payment_schedule_update_many_with_where_without_loan_payments_input_1 = require("./payment-schedule-update-many-with-where-without-loan-payments.input");
const payment_schedule_scalar_where_input_1 = require("./payment-schedule-scalar-where.input");
let PaymentScheduleUncheckedUpdateManyWithoutLoanPaymentsInput = class PaymentScheduleUncheckedUpdateManyWithoutLoanPaymentsInput {
};
__decorate([
    (0, graphql_1.Field)(() => [payment_schedule_create_without_loan_payments_input_1.PaymentScheduleCreateWithoutLoanPaymentsInput], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleUncheckedUpdateManyWithoutLoanPaymentsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_schedule_create_or_connect_without_loan_payments_input_1.PaymentScheduleCreateOrConnectWithoutLoanPaymentsInput], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleUncheckedUpdateManyWithoutLoanPaymentsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_schedule_upsert_with_where_unique_without_loan_payments_input_1.PaymentScheduleUpsertWithWhereUniqueWithoutLoanPaymentsInput], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleUncheckedUpdateManyWithoutLoanPaymentsInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_schedule_where_unique_input_1.PaymentScheduleWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleUncheckedUpdateManyWithoutLoanPaymentsInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_schedule_where_unique_input_1.PaymentScheduleWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleUncheckedUpdateManyWithoutLoanPaymentsInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_schedule_where_unique_input_1.PaymentScheduleWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleUncheckedUpdateManyWithoutLoanPaymentsInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_schedule_where_unique_input_1.PaymentScheduleWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleUncheckedUpdateManyWithoutLoanPaymentsInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_schedule_update_with_where_unique_without_loan_payments_input_1.PaymentScheduleUpdateWithWhereUniqueWithoutLoanPaymentsInput], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleUncheckedUpdateManyWithoutLoanPaymentsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_schedule_update_many_with_where_without_loan_payments_input_1.PaymentScheduleUpdateManyWithWhereWithoutLoanPaymentsInput], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleUncheckedUpdateManyWithoutLoanPaymentsInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_schedule_scalar_where_input_1.PaymentScheduleScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleUncheckedUpdateManyWithoutLoanPaymentsInput.prototype, "deleteMany", void 0);
PaymentScheduleUncheckedUpdateManyWithoutLoanPaymentsInput = __decorate([
    (0, graphql_2.InputType)()
], PaymentScheduleUncheckedUpdateManyWithoutLoanPaymentsInput);
exports.PaymentScheduleUncheckedUpdateManyWithoutLoanPaymentsInput = PaymentScheduleUncheckedUpdateManyWithoutLoanPaymentsInput;
//# sourceMappingURL=payment-schedule-unchecked-update-many-without-loan-payments.input.js.map