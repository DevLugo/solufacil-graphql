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
exports.PaymentScheduleUpsertWithoutCommissionPaymentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const payment_schedule_update_without_commission_payment_input_1 = require("./payment-schedule-update-without-commission-payment.input");
const payment_schedule_create_without_commission_payment_input_1 = require("./payment-schedule-create-without-commission-payment.input");
let PaymentScheduleUpsertWithoutCommissionPaymentInput = class PaymentScheduleUpsertWithoutCommissionPaymentInput {
};
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_update_without_commission_payment_input_1.PaymentScheduleUpdateWithoutCommissionPaymentInput, { nullable: false }),
    __metadata("design:type", payment_schedule_update_without_commission_payment_input_1.PaymentScheduleUpdateWithoutCommissionPaymentInput)
], PaymentScheduleUpsertWithoutCommissionPaymentInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_create_without_commission_payment_input_1.PaymentScheduleCreateWithoutCommissionPaymentInput, { nullable: false }),
    __metadata("design:type", payment_schedule_create_without_commission_payment_input_1.PaymentScheduleCreateWithoutCommissionPaymentInput)
], PaymentScheduleUpsertWithoutCommissionPaymentInput.prototype, "create", void 0);
PaymentScheduleUpsertWithoutCommissionPaymentInput = __decorate([
    (0, graphql_2.InputType)()
], PaymentScheduleUpsertWithoutCommissionPaymentInput);
exports.PaymentScheduleUpsertWithoutCommissionPaymentInput = PaymentScheduleUpsertWithoutCommissionPaymentInput;
//# sourceMappingURL=payment-schedule-upsert-without-commission-payment.input.js.map