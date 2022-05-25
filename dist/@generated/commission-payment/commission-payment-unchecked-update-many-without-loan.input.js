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
exports.CommissionPaymentUncheckedUpdateManyWithoutLoanInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const commission_payment_create_without_loan_input_1 = require("./commission-payment-create-without-loan.input");
const commission_payment_create_or_connect_without_loan_input_1 = require("./commission-payment-create-or-connect-without-loan.input");
const commission_payment_upsert_with_where_unique_without_loan_input_1 = require("./commission-payment-upsert-with-where-unique-without-loan.input");
const commission_payment_create_many_loan_input_envelope_input_1 = require("./commission-payment-create-many-loan-input-envelope.input");
const commission_payment_where_unique_input_1 = require("./commission-payment-where-unique.input");
const commission_payment_update_with_where_unique_without_loan_input_1 = require("./commission-payment-update-with-where-unique-without-loan.input");
const commission_payment_update_many_with_where_without_loan_input_1 = require("./commission-payment-update-many-with-where-without-loan.input");
const commission_payment_scalar_where_input_1 = require("./commission-payment-scalar-where.input");
let CommissionPaymentUncheckedUpdateManyWithoutLoanInput = class CommissionPaymentUncheckedUpdateManyWithoutLoanInput {
};
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_create_without_loan_input_1.CommissionPaymentCreateWithoutLoanInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUncheckedUpdateManyWithoutLoanInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_create_or_connect_without_loan_input_1.CommissionPaymentCreateOrConnectWithoutLoanInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUncheckedUpdateManyWithoutLoanInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_upsert_with_where_unique_without_loan_input_1.CommissionPaymentUpsertWithWhereUniqueWithoutLoanInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUncheckedUpdateManyWithoutLoanInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_create_many_loan_input_envelope_input_1.CommissionPaymentCreateManyLoanInputEnvelope, { nullable: true }),
    __metadata("design:type", commission_payment_create_many_loan_input_envelope_input_1.CommissionPaymentCreateManyLoanInputEnvelope)
], CommissionPaymentUncheckedUpdateManyWithoutLoanInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_where_unique_input_1.CommissionPaymentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUncheckedUpdateManyWithoutLoanInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_where_unique_input_1.CommissionPaymentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUncheckedUpdateManyWithoutLoanInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_where_unique_input_1.CommissionPaymentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUncheckedUpdateManyWithoutLoanInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_where_unique_input_1.CommissionPaymentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUncheckedUpdateManyWithoutLoanInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_update_with_where_unique_without_loan_input_1.CommissionPaymentUpdateWithWhereUniqueWithoutLoanInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUncheckedUpdateManyWithoutLoanInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_update_many_with_where_without_loan_input_1.CommissionPaymentUpdateManyWithWhereWithoutLoanInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUncheckedUpdateManyWithoutLoanInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_scalar_where_input_1.CommissionPaymentScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentUncheckedUpdateManyWithoutLoanInput.prototype, "deleteMany", void 0);
CommissionPaymentUncheckedUpdateManyWithoutLoanInput = __decorate([
    (0, graphql_2.InputType)()
], CommissionPaymentUncheckedUpdateManyWithoutLoanInput);
exports.CommissionPaymentUncheckedUpdateManyWithoutLoanInput = CommissionPaymentUncheckedUpdateManyWithoutLoanInput;
//# sourceMappingURL=commission-payment-unchecked-update-many-without-loan.input.js.map