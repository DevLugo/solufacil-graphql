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
exports.LoantypeUncheckedCreateWithoutComissionPaymentConfigurationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const loan_unchecked_create_nested_many_without_loan_type_input_1 = require("../loan/loan-unchecked-create-nested-many-without-loan-type.input");
let LoantypeUncheckedCreateWithoutComissionPaymentConfigurationInput = class LoantypeUncheckedCreateWithoutComissionPaymentConfigurationInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], LoantypeUncheckedCreateWithoutComissionPaymentConfigurationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LoantypeUncheckedCreateWithoutComissionPaymentConfigurationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], LoantypeUncheckedCreateWithoutComissionPaymentConfigurationInput.prototype, "weekDuration", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: false }),
    __metadata("design:type", Number)
], LoantypeUncheckedCreateWithoutComissionPaymentConfigurationInput.prototype, "rate", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: false }),
    __metadata("design:type", Number)
], LoantypeUncheckedCreateWithoutComissionPaymentConfigurationInput.prototype, "overdueRate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], LoantypeUncheckedCreateWithoutComissionPaymentConfigurationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], LoantypeUncheckedCreateWithoutComissionPaymentConfigurationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_unchecked_create_nested_many_without_loan_type_input_1.LoanUncheckedCreateNestedManyWithoutLoanTypeInput, { nullable: true }),
    __metadata("design:type", loan_unchecked_create_nested_many_without_loan_type_input_1.LoanUncheckedCreateNestedManyWithoutLoanTypeInput)
], LoantypeUncheckedCreateWithoutComissionPaymentConfigurationInput.prototype, "Loan", void 0);
LoantypeUncheckedCreateWithoutComissionPaymentConfigurationInput = __decorate([
    (0, graphql_2.InputType)()
], LoantypeUncheckedCreateWithoutComissionPaymentConfigurationInput);
exports.LoantypeUncheckedCreateWithoutComissionPaymentConfigurationInput = LoantypeUncheckedCreateWithoutComissionPaymentConfigurationInput;
//# sourceMappingURL=loantype-unchecked-create-without-comission-payment-configuration.input.js.map