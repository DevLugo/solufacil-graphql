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
exports.LoanUpsertWithoutPaymentScheduleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_update_without_payment_schedule_input_1 = require("./loan-update-without-payment-schedule.input");
const loan_create_without_payment_schedule_input_1 = require("./loan-create-without-payment-schedule.input");
let LoanUpsertWithoutPaymentScheduleInput = class LoanUpsertWithoutPaymentScheduleInput {
};
__decorate([
    (0, graphql_1.Field)(() => loan_update_without_payment_schedule_input_1.LoanUpdateWithoutPaymentScheduleInput, { nullable: false }),
    __metadata("design:type", loan_update_without_payment_schedule_input_1.LoanUpdateWithoutPaymentScheduleInput)
], LoanUpsertWithoutPaymentScheduleInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_create_without_payment_schedule_input_1.LoanCreateWithoutPaymentScheduleInput, { nullable: false }),
    __metadata("design:type", loan_create_without_payment_schedule_input_1.LoanCreateWithoutPaymentScheduleInput)
], LoanUpsertWithoutPaymentScheduleInput.prototype, "create", void 0);
LoanUpsertWithoutPaymentScheduleInput = __decorate([
    (0, graphql_2.InputType)()
], LoanUpsertWithoutPaymentScheduleInput);
exports.LoanUpsertWithoutPaymentScheduleInput = LoanUpsertWithoutPaymentScheduleInput;
//# sourceMappingURL=loan-upsert-without-payment-schedule.input.js.map