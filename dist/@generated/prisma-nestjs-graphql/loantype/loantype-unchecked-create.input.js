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
exports.LoantypeUncheckedCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const loan_unchecked_create_nested_many_without_loan_type_input_1 = require("../loan/loan-unchecked-create-nested-many-without-loan-type.input");
const comission_payment_configuration_unchecked_create_nested_many_without_loan_type_input_1 = require("../comission-payment-configuration/comission-payment-configuration-unchecked-create-nested-many-without-loan-type.input");
let LoantypeUncheckedCreateInput = class LoantypeUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], LoantypeUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LoantypeUncheckedCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], LoantypeUncheckedCreateInput.prototype, "weekDuration", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: false }),
    __metadata("design:type", Number)
], LoantypeUncheckedCreateInput.prototype, "rate", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: false }),
    __metadata("design:type", Number)
], LoantypeUncheckedCreateInput.prototype, "overdueRate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], LoantypeUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], LoantypeUncheckedCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_unchecked_create_nested_many_without_loan_type_input_1.LoanUncheckedCreateNestedManyWithoutLoanTypeInput, { nullable: true }),
    __metadata("design:type", loan_unchecked_create_nested_many_without_loan_type_input_1.LoanUncheckedCreateNestedManyWithoutLoanTypeInput)
], LoantypeUncheckedCreateInput.prototype, "Loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_unchecked_create_nested_many_without_loan_type_input_1.ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_unchecked_create_nested_many_without_loan_type_input_1.ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput)
], LoantypeUncheckedCreateInput.prototype, "ComissionPaymentConfiguration", void 0);
LoantypeUncheckedCreateInput = __decorate([
    (0, graphql_2.InputType)()
], LoantypeUncheckedCreateInput);
exports.LoantypeUncheckedCreateInput = LoantypeUncheckedCreateInput;
//# sourceMappingURL=loantype-unchecked-create.input.js.map