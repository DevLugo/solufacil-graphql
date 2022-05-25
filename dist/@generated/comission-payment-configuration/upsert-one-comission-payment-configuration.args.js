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
exports.UpsertOneComissionPaymentConfigurationArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comission_payment_configuration_where_unique_input_1 = require("./comission-payment-configuration-where-unique.input");
const comission_payment_configuration_create_input_1 = require("./comission-payment-configuration-create.input");
const comission_payment_configuration_update_input_1 = require("./comission-payment-configuration-update.input");
let UpsertOneComissionPaymentConfigurationArgs = class UpsertOneComissionPaymentConfigurationArgs {
};
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_where_unique_input_1.ComissionPaymentConfigurationWhereUniqueInput, { nullable: false }),
    __metadata("design:type", comission_payment_configuration_where_unique_input_1.ComissionPaymentConfigurationWhereUniqueInput)
], UpsertOneComissionPaymentConfigurationArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_create_input_1.ComissionPaymentConfigurationCreateInput, { nullable: false }),
    __metadata("design:type", comission_payment_configuration_create_input_1.ComissionPaymentConfigurationCreateInput)
], UpsertOneComissionPaymentConfigurationArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_update_input_1.ComissionPaymentConfigurationUpdateInput, { nullable: false }),
    __metadata("design:type", comission_payment_configuration_update_input_1.ComissionPaymentConfigurationUpdateInput)
], UpsertOneComissionPaymentConfigurationArgs.prototype, "update", void 0);
UpsertOneComissionPaymentConfigurationArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneComissionPaymentConfigurationArgs);
exports.UpsertOneComissionPaymentConfigurationArgs = UpsertOneComissionPaymentConfigurationArgs;
//# sourceMappingURL=upsert-one-comission-payment-configuration.args.js.map