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
exports.PaymentScheduleCreateNestedManyWithoutLoanInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const payment_schedule_create_without_loan_input_1 = require("./payment-schedule-create-without-loan.input");
const payment_schedule_create_or_connect_without_loan_input_1 = require("./payment-schedule-create-or-connect-without-loan.input");
const payment_schedule_create_many_loan_input_envelope_input_1 = require("./payment-schedule-create-many-loan-input-envelope.input");
const payment_schedule_where_unique_input_1 = require("./payment-schedule-where-unique.input");
let PaymentScheduleCreateNestedManyWithoutLoanInput = class PaymentScheduleCreateNestedManyWithoutLoanInput {
};
__decorate([
    (0, graphql_1.Field)(() => [payment_schedule_create_without_loan_input_1.PaymentScheduleCreateWithoutLoanInput], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleCreateNestedManyWithoutLoanInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_schedule_create_or_connect_without_loan_input_1.PaymentScheduleCreateOrConnectWithoutLoanInput], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleCreateNestedManyWithoutLoanInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_create_many_loan_input_envelope_input_1.PaymentScheduleCreateManyLoanInputEnvelope, { nullable: true }),
    __metadata("design:type", payment_schedule_create_many_loan_input_envelope_input_1.PaymentScheduleCreateManyLoanInputEnvelope)
], PaymentScheduleCreateNestedManyWithoutLoanInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_schedule_where_unique_input_1.PaymentScheduleWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PaymentScheduleCreateNestedManyWithoutLoanInput.prototype, "connect", void 0);
PaymentScheduleCreateNestedManyWithoutLoanInput = __decorate([
    (0, graphql_2.InputType)()
], PaymentScheduleCreateNestedManyWithoutLoanInput);
exports.PaymentScheduleCreateNestedManyWithoutLoanInput = PaymentScheduleCreateNestedManyWithoutLoanInput;
//# sourceMappingURL=payment-schedule-create-nested-many-without-loan.input.js.map