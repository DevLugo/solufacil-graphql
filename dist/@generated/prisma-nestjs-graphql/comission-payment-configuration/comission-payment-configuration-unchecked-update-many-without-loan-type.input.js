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
exports.ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comission_payment_configuration_create_without_loan_type_input_1 = require("./comission-payment-configuration-create-without-loan-type.input");
const comission_payment_configuration_create_or_connect_without_loan_type_input_1 = require("./comission-payment-configuration-create-or-connect-without-loan-type.input");
const comission_payment_configuration_upsert_with_where_unique_without_loan_type_input_1 = require("./comission-payment-configuration-upsert-with-where-unique-without-loan-type.input");
const comission_payment_configuration_create_many_loan_type_input_envelope_input_1 = require("./comission-payment-configuration-create-many-loan-type-input-envelope.input");
const comission_payment_configuration_where_unique_input_1 = require("./comission-payment-configuration-where-unique.input");
const comission_payment_configuration_update_with_where_unique_without_loan_type_input_1 = require("./comission-payment-configuration-update-with-where-unique-without-loan-type.input");
const comission_payment_configuration_update_many_with_where_without_loan_type_input_1 = require("./comission-payment-configuration-update-many-with-where-without-loan-type.input");
const comission_payment_configuration_scalar_where_input_1 = require("./comission-payment-configuration-scalar-where.input");
let ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput = class ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput {
};
__decorate([
    (0, graphql_1.Field)(() => [comission_payment_configuration_create_without_loan_type_input_1.ComissionPaymentConfigurationCreateWithoutLoanTypeInput], { nullable: true }),
    __metadata("design:type", Array)
], ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comission_payment_configuration_create_or_connect_without_loan_type_input_1.ComissionPaymentConfigurationCreateOrConnectWithoutLoanTypeInput], { nullable: true }),
    __metadata("design:type", Array)
], ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comission_payment_configuration_upsert_with_where_unique_without_loan_type_input_1.ComissionPaymentConfigurationUpsertWithWhereUniqueWithoutLoanTypeInput], { nullable: true }),
    __metadata("design:type", Array)
], ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_create_many_loan_type_input_envelope_input_1.ComissionPaymentConfigurationCreateManyLoanTypeInputEnvelope, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_create_many_loan_type_input_envelope_input_1.ComissionPaymentConfigurationCreateManyLoanTypeInputEnvelope)
], ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comission_payment_configuration_where_unique_input_1.ComissionPaymentConfigurationWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comission_payment_configuration_where_unique_input_1.ComissionPaymentConfigurationWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comission_payment_configuration_where_unique_input_1.ComissionPaymentConfigurationWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comission_payment_configuration_where_unique_input_1.ComissionPaymentConfigurationWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comission_payment_configuration_update_with_where_unique_without_loan_type_input_1.ComissionPaymentConfigurationUpdateWithWhereUniqueWithoutLoanTypeInput], { nullable: true }),
    __metadata("design:type", Array)
], ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comission_payment_configuration_update_many_with_where_without_loan_type_input_1.ComissionPaymentConfigurationUpdateManyWithWhereWithoutLoanTypeInput], { nullable: true }),
    __metadata("design:type", Array)
], ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comission_payment_configuration_scalar_where_input_1.ComissionPaymentConfigurationScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput.prototype, "deleteMany", void 0);
ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput = __decorate([
    (0, graphql_2.InputType)()
], ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput);
exports.ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput = ComissionPaymentConfigurationUncheckedUpdateManyWithoutLoanTypeInput;
//# sourceMappingURL=comission-payment-configuration-unchecked-update-many-without-loan-type.input.js.map