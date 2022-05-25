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
exports.LoantypeUpsertWithoutComissionPaymentConfigurationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loantype_update_without_comission_payment_configuration_input_1 = require("./loantype-update-without-comission-payment-configuration.input");
const loantype_create_without_comission_payment_configuration_input_1 = require("./loantype-create-without-comission-payment-configuration.input");
let LoantypeUpsertWithoutComissionPaymentConfigurationInput = class LoantypeUpsertWithoutComissionPaymentConfigurationInput {
};
__decorate([
    (0, graphql_1.Field)(() => loantype_update_without_comission_payment_configuration_input_1.LoantypeUpdateWithoutComissionPaymentConfigurationInput, { nullable: false }),
    __metadata("design:type", loantype_update_without_comission_payment_configuration_input_1.LoantypeUpdateWithoutComissionPaymentConfigurationInput)
], LoantypeUpsertWithoutComissionPaymentConfigurationInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_create_without_comission_payment_configuration_input_1.LoantypeCreateWithoutComissionPaymentConfigurationInput, { nullable: false }),
    __metadata("design:type", loantype_create_without_comission_payment_configuration_input_1.LoantypeCreateWithoutComissionPaymentConfigurationInput)
], LoantypeUpsertWithoutComissionPaymentConfigurationInput.prototype, "create", void 0);
LoantypeUpsertWithoutComissionPaymentConfigurationInput = __decorate([
    (0, graphql_2.InputType)()
], LoantypeUpsertWithoutComissionPaymentConfigurationInput);
exports.LoantypeUpsertWithoutComissionPaymentConfigurationInput = LoantypeUpsertWithoutComissionPaymentConfigurationInput;
//# sourceMappingURL=loantype-upsert-without-comission-payment-configuration.input.js.map