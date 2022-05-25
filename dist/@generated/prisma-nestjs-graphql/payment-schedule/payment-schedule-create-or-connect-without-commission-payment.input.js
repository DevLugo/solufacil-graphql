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
exports.PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const payment_schedule_where_unique_input_1 = require("./payment-schedule-where-unique.input");
const payment_schedule_create_without_commission_payment_input_1 = require("./payment-schedule-create-without-commission-payment.input");
let PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput = class PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput {
};
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_where_unique_input_1.PaymentScheduleWhereUniqueInput, { nullable: false }),
    __metadata("design:type", payment_schedule_where_unique_input_1.PaymentScheduleWhereUniqueInput)
], PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_create_without_commission_payment_input_1.PaymentScheduleCreateWithoutCommissionPaymentInput, { nullable: false }),
    __metadata("design:type", payment_schedule_create_without_commission_payment_input_1.PaymentScheduleCreateWithoutCommissionPaymentInput)
], PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput.prototype, "create", void 0);
PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput = __decorate([
    (0, graphql_2.InputType)()
], PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput);
exports.PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput = PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput;
//# sourceMappingURL=payment-schedule-create-or-connect-without-commission-payment.input.js.map