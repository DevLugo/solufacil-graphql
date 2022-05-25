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
exports.LoanUpdateOneRequiredWithoutPaymentScheduleInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_create_without_payment_schedule_input_1 = require("./loan-create-without-payment-schedule.input");
const loan_create_or_connect_without_payment_schedule_input_1 = require("./loan-create-or-connect-without-payment-schedule.input");
const loan_upsert_without_payment_schedule_input_1 = require("./loan-upsert-without-payment-schedule.input");
const loan_where_unique_input_1 = require("./loan-where-unique.input");
const loan_update_without_payment_schedule_input_1 = require("./loan-update-without-payment-schedule.input");
let LoanUpdateOneRequiredWithoutPaymentScheduleInput = class LoanUpdateOneRequiredWithoutPaymentScheduleInput {
};
__decorate([
    (0, graphql_1.Field)(() => loan_create_without_payment_schedule_input_1.LoanCreateWithoutPaymentScheduleInput, { nullable: true }),
    __metadata("design:type", loan_create_without_payment_schedule_input_1.LoanCreateWithoutPaymentScheduleInput)
], LoanUpdateOneRequiredWithoutPaymentScheduleInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_create_or_connect_without_payment_schedule_input_1.LoanCreateOrConnectWithoutPaymentScheduleInput, { nullable: true }),
    __metadata("design:type", loan_create_or_connect_without_payment_schedule_input_1.LoanCreateOrConnectWithoutPaymentScheduleInput)
], LoanUpdateOneRequiredWithoutPaymentScheduleInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_upsert_without_payment_schedule_input_1.LoanUpsertWithoutPaymentScheduleInput, { nullable: true }),
    __metadata("design:type", loan_upsert_without_payment_schedule_input_1.LoanUpsertWithoutPaymentScheduleInput)
], LoanUpdateOneRequiredWithoutPaymentScheduleInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_where_unique_input_1.LoanWhereUniqueInput, { nullable: true }),
    __metadata("design:type", loan_where_unique_input_1.LoanWhereUniqueInput)
], LoanUpdateOneRequiredWithoutPaymentScheduleInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_update_without_payment_schedule_input_1.LoanUpdateWithoutPaymentScheduleInput, { nullable: true }),
    __metadata("design:type", loan_update_without_payment_schedule_input_1.LoanUpdateWithoutPaymentScheduleInput)
], LoanUpdateOneRequiredWithoutPaymentScheduleInput.prototype, "update", void 0);
LoanUpdateOneRequiredWithoutPaymentScheduleInput = __decorate([
    (0, graphql_2.InputType)()
], LoanUpdateOneRequiredWithoutPaymentScheduleInput);
exports.LoanUpdateOneRequiredWithoutPaymentScheduleInput = LoanUpdateOneRequiredWithoutPaymentScheduleInput;
//# sourceMappingURL=loan-update-one-required-without-payment-schedule.input.js.map