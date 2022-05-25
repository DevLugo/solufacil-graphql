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
exports.LoanPaymentUpsertWithWhereUniqueWithoutLoanInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_payment_where_unique_input_1 = require("./loan-payment-where-unique.input");
const loan_payment_update_without_loan_input_1 = require("./loan-payment-update-without-loan.input");
const loan_payment_create_without_loan_input_1 = require("./loan-payment-create-without-loan.input");
let LoanPaymentUpsertWithWhereUniqueWithoutLoanInput = class LoanPaymentUpsertWithWhereUniqueWithoutLoanInput {
};
__decorate([
    (0, graphql_1.Field)(() => loan_payment_where_unique_input_1.LoanPaymentWhereUniqueInput, { nullable: false }),
    __metadata("design:type", loan_payment_where_unique_input_1.LoanPaymentWhereUniqueInput)
], LoanPaymentUpsertWithWhereUniqueWithoutLoanInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_update_without_loan_input_1.LoanPaymentUpdateWithoutLoanInput, { nullable: false }),
    __metadata("design:type", loan_payment_update_without_loan_input_1.LoanPaymentUpdateWithoutLoanInput)
], LoanPaymentUpsertWithWhereUniqueWithoutLoanInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_create_without_loan_input_1.LoanPaymentCreateWithoutLoanInput, { nullable: false }),
    __metadata("design:type", loan_payment_create_without_loan_input_1.LoanPaymentCreateWithoutLoanInput)
], LoanPaymentUpsertWithWhereUniqueWithoutLoanInput.prototype, "create", void 0);
LoanPaymentUpsertWithWhereUniqueWithoutLoanInput = __decorate([
    (0, graphql_2.InputType)()
], LoanPaymentUpsertWithWhereUniqueWithoutLoanInput);
exports.LoanPaymentUpsertWithWhereUniqueWithoutLoanInput = LoanPaymentUpsertWithWhereUniqueWithoutLoanInput;
//# sourceMappingURL=loan-payment-upsert-with-where-unique-without-loan.input.js.map