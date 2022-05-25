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
exports.CommissionPaymentCreateNestedManyWithoutLoanInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const commission_payment_create_without_loan_input_1 = require("./commission-payment-create-without-loan.input");
const commission_payment_create_or_connect_without_loan_input_1 = require("./commission-payment-create-or-connect-without-loan.input");
const commission_payment_create_many_loan_input_envelope_input_1 = require("./commission-payment-create-many-loan-input-envelope.input");
const commission_payment_where_unique_input_1 = require("./commission-payment-where-unique.input");
let CommissionPaymentCreateNestedManyWithoutLoanInput = class CommissionPaymentCreateNestedManyWithoutLoanInput {
};
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_create_without_loan_input_1.CommissionPaymentCreateWithoutLoanInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentCreateNestedManyWithoutLoanInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_create_or_connect_without_loan_input_1.CommissionPaymentCreateOrConnectWithoutLoanInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentCreateNestedManyWithoutLoanInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_create_many_loan_input_envelope_input_1.CommissionPaymentCreateManyLoanInputEnvelope, { nullable: true }),
    __metadata("design:type", commission_payment_create_many_loan_input_envelope_input_1.CommissionPaymentCreateManyLoanInputEnvelope)
], CommissionPaymentCreateNestedManyWithoutLoanInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_where_unique_input_1.CommissionPaymentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentCreateNestedManyWithoutLoanInput.prototype, "connect", void 0);
CommissionPaymentCreateNestedManyWithoutLoanInput = __decorate([
    (0, graphql_2.InputType)()
], CommissionPaymentCreateNestedManyWithoutLoanInput);
exports.CommissionPaymentCreateNestedManyWithoutLoanInput = CommissionPaymentCreateNestedManyWithoutLoanInput;
//# sourceMappingURL=commission-payment-create-nested-many-without-loan.input.js.map