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
exports.LoantypeUncheckedCreateWithoutLoanInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const graphql_4 = require("@nestjs/graphql");
const comission_payment_configuration_unchecked_create_nested_many_without_loan_type_input_1 = require("../comission-payment-configuration/comission-payment-configuration-unchecked-create-nested-many-without-loan-type.input");
let LoantypeUncheckedCreateWithoutLoanInput = class LoantypeUncheckedCreateWithoutLoanInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], LoantypeUncheckedCreateWithoutLoanInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LoantypeUncheckedCreateWithoutLoanInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], LoantypeUncheckedCreateWithoutLoanInput.prototype, "weekDuration", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: false }),
    __metadata("design:type", Number)
], LoantypeUncheckedCreateWithoutLoanInput.prototype, "rate", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Float, { nullable: false }),
    __metadata("design:type", Number)
], LoantypeUncheckedCreateWithoutLoanInput.prototype, "overdueRate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], LoantypeUncheckedCreateWithoutLoanInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], LoantypeUncheckedCreateWithoutLoanInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_unchecked_create_nested_many_without_loan_type_input_1.ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_unchecked_create_nested_many_without_loan_type_input_1.ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput)
], LoantypeUncheckedCreateWithoutLoanInput.prototype, "ComissionPaymentConfiguration", void 0);
LoantypeUncheckedCreateWithoutLoanInput = __decorate([
    (0, graphql_2.InputType)()
], LoantypeUncheckedCreateWithoutLoanInput);
exports.LoantypeUncheckedCreateWithoutLoanInput = LoantypeUncheckedCreateWithoutLoanInput;
//# sourceMappingURL=loantype-unchecked-create-without-loan.input.js.map