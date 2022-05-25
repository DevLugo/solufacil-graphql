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
exports.LoanPaymentUncheckedUpdateManyWithoutLoanInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_payment_create_without_loan_input_1 = require("./loan-payment-create-without-loan.input");
const loan_payment_create_or_connect_without_loan_input_1 = require("./loan-payment-create-or-connect-without-loan.input");
const loan_payment_upsert_with_where_unique_without_loan_input_1 = require("./loan-payment-upsert-with-where-unique-without-loan.input");
const loan_payment_create_many_loan_input_envelope_input_1 = require("./loan-payment-create-many-loan-input-envelope.input");
const loan_payment_where_unique_input_1 = require("./loan-payment-where-unique.input");
const loan_payment_update_with_where_unique_without_loan_input_1 = require("./loan-payment-update-with-where-unique-without-loan.input");
const loan_payment_update_many_with_where_without_loan_input_1 = require("./loan-payment-update-many-with-where-without-loan.input");
const loan_payment_scalar_where_input_1 = require("./loan-payment-scalar-where.input");
let LoanPaymentUncheckedUpdateManyWithoutLoanInput = class LoanPaymentUncheckedUpdateManyWithoutLoanInput {
};
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_create_without_loan_input_1.LoanPaymentCreateWithoutLoanInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentUncheckedUpdateManyWithoutLoanInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_create_or_connect_without_loan_input_1.LoanPaymentCreateOrConnectWithoutLoanInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentUncheckedUpdateManyWithoutLoanInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_upsert_with_where_unique_without_loan_input_1.LoanPaymentUpsertWithWhereUniqueWithoutLoanInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentUncheckedUpdateManyWithoutLoanInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_create_many_loan_input_envelope_input_1.LoanPaymentCreateManyLoanInputEnvelope, { nullable: true }),
    __metadata("design:type", loan_payment_create_many_loan_input_envelope_input_1.LoanPaymentCreateManyLoanInputEnvelope)
], LoanPaymentUncheckedUpdateManyWithoutLoanInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_where_unique_input_1.LoanPaymentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentUncheckedUpdateManyWithoutLoanInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_where_unique_input_1.LoanPaymentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentUncheckedUpdateManyWithoutLoanInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_where_unique_input_1.LoanPaymentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentUncheckedUpdateManyWithoutLoanInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_where_unique_input_1.LoanPaymentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentUncheckedUpdateManyWithoutLoanInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_update_with_where_unique_without_loan_input_1.LoanPaymentUpdateWithWhereUniqueWithoutLoanInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentUncheckedUpdateManyWithoutLoanInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_update_many_with_where_without_loan_input_1.LoanPaymentUpdateManyWithWhereWithoutLoanInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentUncheckedUpdateManyWithoutLoanInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_scalar_where_input_1.LoanPaymentScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentUncheckedUpdateManyWithoutLoanInput.prototype, "deleteMany", void 0);
LoanPaymentUncheckedUpdateManyWithoutLoanInput = __decorate([
    (0, graphql_2.InputType)()
], LoanPaymentUncheckedUpdateManyWithoutLoanInput);
exports.LoanPaymentUncheckedUpdateManyWithoutLoanInput = LoanPaymentUncheckedUpdateManyWithoutLoanInput;
//# sourceMappingURL=loan-payment-unchecked-update-many-without-loan.input.js.map