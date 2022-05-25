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
exports.PaymentScheduleUpdateOneRequiredWithoutCommissionPaymentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const payment_schedule_create_without_commission_payment_input_1 = require("./payment-schedule-create-without-commission-payment.input");
const payment_schedule_create_or_connect_without_commission_payment_input_1 = require("./payment-schedule-create-or-connect-without-commission-payment.input");
const payment_schedule_upsert_without_commission_payment_input_1 = require("./payment-schedule-upsert-without-commission-payment.input");
const payment_schedule_where_unique_input_1 = require("./payment-schedule-where-unique.input");
const payment_schedule_update_without_commission_payment_input_1 = require("./payment-schedule-update-without-commission-payment.input");
let PaymentScheduleUpdateOneRequiredWithoutCommissionPaymentInput = class PaymentScheduleUpdateOneRequiredWithoutCommissionPaymentInput {
};
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_create_without_commission_payment_input_1.PaymentScheduleCreateWithoutCommissionPaymentInput, { nullable: true }),
    __metadata("design:type", payment_schedule_create_without_commission_payment_input_1.PaymentScheduleCreateWithoutCommissionPaymentInput)
], PaymentScheduleUpdateOneRequiredWithoutCommissionPaymentInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_create_or_connect_without_commission_payment_input_1.PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput, { nullable: true }),
    __metadata("design:type", payment_schedule_create_or_connect_without_commission_payment_input_1.PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput)
], PaymentScheduleUpdateOneRequiredWithoutCommissionPaymentInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_upsert_without_commission_payment_input_1.PaymentScheduleUpsertWithoutCommissionPaymentInput, { nullable: true }),
    __metadata("design:type", payment_schedule_upsert_without_commission_payment_input_1.PaymentScheduleUpsertWithoutCommissionPaymentInput)
], PaymentScheduleUpdateOneRequiredWithoutCommissionPaymentInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_where_unique_input_1.PaymentScheduleWhereUniqueInput, { nullable: true }),
    __metadata("design:type", payment_schedule_where_unique_input_1.PaymentScheduleWhereUniqueInput)
], PaymentScheduleUpdateOneRequiredWithoutCommissionPaymentInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_update_without_commission_payment_input_1.PaymentScheduleUpdateWithoutCommissionPaymentInput, { nullable: true }),
    __metadata("design:type", payment_schedule_update_without_commission_payment_input_1.PaymentScheduleUpdateWithoutCommissionPaymentInput)
], PaymentScheduleUpdateOneRequiredWithoutCommissionPaymentInput.prototype, "update", void 0);
PaymentScheduleUpdateOneRequiredWithoutCommissionPaymentInput = __decorate([
    (0, graphql_2.InputType)()
], PaymentScheduleUpdateOneRequiredWithoutCommissionPaymentInput);
exports.PaymentScheduleUpdateOneRequiredWithoutCommissionPaymentInput = PaymentScheduleUpdateOneRequiredWithoutCommissionPaymentInput;
//# sourceMappingURL=payment-schedule-update-one-required-without-commission-payment.input.js.map