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
exports.LoanPaymentUpdateWithWhereUniqueWithoutPaymentSchedulesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_payment_where_unique_input_1 = require("./loan-payment-where-unique.input");
const loan_payment_update_without_payment_schedules_input_1 = require("./loan-payment-update-without-payment-schedules.input");
let LoanPaymentUpdateWithWhereUniqueWithoutPaymentSchedulesInput = class LoanPaymentUpdateWithWhereUniqueWithoutPaymentSchedulesInput {
};
__decorate([
    (0, graphql_1.Field)(() => loan_payment_where_unique_input_1.LoanPaymentWhereUniqueInput, { nullable: false }),
    __metadata("design:type", loan_payment_where_unique_input_1.LoanPaymentWhereUniqueInput)
], LoanPaymentUpdateWithWhereUniqueWithoutPaymentSchedulesInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_update_without_payment_schedules_input_1.LoanPaymentUpdateWithoutPaymentSchedulesInput, { nullable: false }),
    __metadata("design:type", loan_payment_update_without_payment_schedules_input_1.LoanPaymentUpdateWithoutPaymentSchedulesInput)
], LoanPaymentUpdateWithWhereUniqueWithoutPaymentSchedulesInput.prototype, "data", void 0);
LoanPaymentUpdateWithWhereUniqueWithoutPaymentSchedulesInput = __decorate([
    (0, graphql_2.InputType)()
], LoanPaymentUpdateWithWhereUniqueWithoutPaymentSchedulesInput);
exports.LoanPaymentUpdateWithWhereUniqueWithoutPaymentSchedulesInput = LoanPaymentUpdateWithWhereUniqueWithoutPaymentSchedulesInput;
//# sourceMappingURL=loan-payment-update-with-where-unique-without-payment-schedules.input.js.map