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
exports.ComissionPaymentConfigurationUpdateManyWithWhereWithoutLoanTypeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comission_payment_configuration_scalar_where_input_1 = require("./comission-payment-configuration-scalar-where.input");
const comission_payment_configuration_update_many_mutation_input_1 = require("./comission-payment-configuration-update-many-mutation.input");
let ComissionPaymentConfigurationUpdateManyWithWhereWithoutLoanTypeInput = class ComissionPaymentConfigurationUpdateManyWithWhereWithoutLoanTypeInput {
};
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_scalar_where_input_1.ComissionPaymentConfigurationScalarWhereInput, { nullable: false }),
    __metadata("design:type", comission_payment_configuration_scalar_where_input_1.ComissionPaymentConfigurationScalarWhereInput)
], ComissionPaymentConfigurationUpdateManyWithWhereWithoutLoanTypeInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_update_many_mutation_input_1.ComissionPaymentConfigurationUpdateManyMutationInput, { nullable: false }),
    __metadata("design:type", comission_payment_configuration_update_many_mutation_input_1.ComissionPaymentConfigurationUpdateManyMutationInput)
], ComissionPaymentConfigurationUpdateManyWithWhereWithoutLoanTypeInput.prototype, "data", void 0);
ComissionPaymentConfigurationUpdateManyWithWhereWithoutLoanTypeInput = __decorate([
    (0, graphql_2.InputType)()
], ComissionPaymentConfigurationUpdateManyWithWhereWithoutLoanTypeInput);
exports.ComissionPaymentConfigurationUpdateManyWithWhereWithoutLoanTypeInput = ComissionPaymentConfigurationUpdateManyWithWhereWithoutLoanTypeInput;
//# sourceMappingURL=comission-payment-configuration-update-many-with-where-without-loan-type.input.js.map