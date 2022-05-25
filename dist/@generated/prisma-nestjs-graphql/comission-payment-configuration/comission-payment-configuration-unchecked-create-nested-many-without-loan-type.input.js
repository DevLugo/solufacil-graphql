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
exports.ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comission_payment_configuration_create_without_loan_type_input_1 = require("./comission-payment-configuration-create-without-loan-type.input");
const comission_payment_configuration_create_or_connect_without_loan_type_input_1 = require("./comission-payment-configuration-create-or-connect-without-loan-type.input");
const comission_payment_configuration_create_many_loan_type_input_envelope_input_1 = require("./comission-payment-configuration-create-many-loan-type-input-envelope.input");
const comission_payment_configuration_where_unique_input_1 = require("./comission-payment-configuration-where-unique.input");
let ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput = class ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput {
};
__decorate([
    (0, graphql_1.Field)(() => [comission_payment_configuration_create_without_loan_type_input_1.ComissionPaymentConfigurationCreateWithoutLoanTypeInput], { nullable: true }),
    __metadata("design:type", Array)
], ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comission_payment_configuration_create_or_connect_without_loan_type_input_1.ComissionPaymentConfigurationCreateOrConnectWithoutLoanTypeInput], { nullable: true }),
    __metadata("design:type", Array)
], ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_create_many_loan_type_input_envelope_input_1.ComissionPaymentConfigurationCreateManyLoanTypeInputEnvelope, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_create_many_loan_type_input_envelope_input_1.ComissionPaymentConfigurationCreateManyLoanTypeInputEnvelope)
], ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comission_payment_configuration_where_unique_input_1.ComissionPaymentConfigurationWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput.prototype, "connect", void 0);
ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput = __decorate([
    (0, graphql_2.InputType)()
], ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput);
exports.ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput = ComissionPaymentConfigurationUncheckedCreateNestedManyWithoutLoanTypeInput;
//# sourceMappingURL=comission-payment-configuration-unchecked-create-nested-many-without-loan-type.input.js.map