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
exports.PaymentScheduleCreateNestedOneWithoutCommissionPaymentInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const payment_schedule_create_without_commission_payment_input_1 = require("./payment-schedule-create-without-commission-payment.input");
const payment_schedule_create_or_connect_without_commission_payment_input_1 = require("./payment-schedule-create-or-connect-without-commission-payment.input");
const payment_schedule_where_unique_input_1 = require("./payment-schedule-where-unique.input");
let PaymentScheduleCreateNestedOneWithoutCommissionPaymentInput = class PaymentScheduleCreateNestedOneWithoutCommissionPaymentInput {
};
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_create_without_commission_payment_input_1.PaymentScheduleCreateWithoutCommissionPaymentInput, { nullable: true }),
    __metadata("design:type", payment_schedule_create_without_commission_payment_input_1.PaymentScheduleCreateWithoutCommissionPaymentInput)
], PaymentScheduleCreateNestedOneWithoutCommissionPaymentInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_create_or_connect_without_commission_payment_input_1.PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput, { nullable: true }),
    __metadata("design:type", payment_schedule_create_or_connect_without_commission_payment_input_1.PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput)
], PaymentScheduleCreateNestedOneWithoutCommissionPaymentInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_where_unique_input_1.PaymentScheduleWhereUniqueInput, { nullable: true }),
    __metadata("design:type", payment_schedule_where_unique_input_1.PaymentScheduleWhereUniqueInput)
], PaymentScheduleCreateNestedOneWithoutCommissionPaymentInput.prototype, "connect", void 0);
PaymentScheduleCreateNestedOneWithoutCommissionPaymentInput = __decorate([
    (0, graphql_2.InputType)()
], PaymentScheduleCreateNestedOneWithoutCommissionPaymentInput);
exports.PaymentScheduleCreateNestedOneWithoutCommissionPaymentInput = PaymentScheduleCreateNestedOneWithoutCommissionPaymentInput;
//# sourceMappingURL=payment-schedule-create-nested-one-without-commission-payment.input.js.map