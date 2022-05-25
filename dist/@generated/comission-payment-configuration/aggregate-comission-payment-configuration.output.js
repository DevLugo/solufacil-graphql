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
exports.AggregateComissionPaymentConfiguration = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comission_payment_configuration_count_aggregate_output_1 = require("./comission-payment-configuration-count-aggregate.output");
const comission_payment_configuration_min_aggregate_output_1 = require("./comission-payment-configuration-min-aggregate.output");
const comission_payment_configuration_max_aggregate_output_1 = require("./comission-payment-configuration-max-aggregate.output");
let AggregateComissionPaymentConfiguration = class AggregateComissionPaymentConfiguration {
};
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_count_aggregate_output_1.ComissionPaymentConfigurationCountAggregate, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_count_aggregate_output_1.ComissionPaymentConfigurationCountAggregate)
], AggregateComissionPaymentConfiguration.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_min_aggregate_output_1.ComissionPaymentConfigurationMinAggregate, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_min_aggregate_output_1.ComissionPaymentConfigurationMinAggregate)
], AggregateComissionPaymentConfiguration.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_max_aggregate_output_1.ComissionPaymentConfigurationMaxAggregate, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_max_aggregate_output_1.ComissionPaymentConfigurationMaxAggregate)
], AggregateComissionPaymentConfiguration.prototype, "_max", void 0);
AggregateComissionPaymentConfiguration = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateComissionPaymentConfiguration);
exports.AggregateComissionPaymentConfiguration = AggregateComissionPaymentConfiguration;
//# sourceMappingURL=aggregate-comission-payment-configuration.output.js.map