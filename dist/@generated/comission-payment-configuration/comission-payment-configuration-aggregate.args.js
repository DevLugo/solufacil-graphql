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
exports.ComissionPaymentConfigurationAggregateArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comission_payment_configuration_where_input_1 = require("./comission-payment-configuration-where.input");
const comission_payment_configuration_order_by_with_relation_input_1 = require("./comission-payment-configuration-order-by-with-relation.input");
const comission_payment_configuration_where_unique_input_1 = require("./comission-payment-configuration-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const comission_payment_configuration_count_aggregate_input_1 = require("./comission-payment-configuration-count-aggregate.input");
const comission_payment_configuration_min_aggregate_input_1 = require("./comission-payment-configuration-min-aggregate.input");
const comission_payment_configuration_max_aggregate_input_1 = require("./comission-payment-configuration-max-aggregate.input");
let ComissionPaymentConfigurationAggregateArgs = class ComissionPaymentConfigurationAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_where_input_1.ComissionPaymentConfigurationWhereInput, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_where_input_1.ComissionPaymentConfigurationWhereInput)
], ComissionPaymentConfigurationAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comission_payment_configuration_order_by_with_relation_input_1.ComissionPaymentConfigurationOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], ComissionPaymentConfigurationAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_where_unique_input_1.ComissionPaymentConfigurationWhereUniqueInput, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_where_unique_input_1.ComissionPaymentConfigurationWhereUniqueInput)
], ComissionPaymentConfigurationAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ComissionPaymentConfigurationAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ComissionPaymentConfigurationAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_count_aggregate_input_1.ComissionPaymentConfigurationCountAggregateInput, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_count_aggregate_input_1.ComissionPaymentConfigurationCountAggregateInput)
], ComissionPaymentConfigurationAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_min_aggregate_input_1.ComissionPaymentConfigurationMinAggregateInput, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_min_aggregate_input_1.ComissionPaymentConfigurationMinAggregateInput)
], ComissionPaymentConfigurationAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_max_aggregate_input_1.ComissionPaymentConfigurationMaxAggregateInput, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_max_aggregate_input_1.ComissionPaymentConfigurationMaxAggregateInput)
], ComissionPaymentConfigurationAggregateArgs.prototype, "_max", void 0);
ComissionPaymentConfigurationAggregateArgs = __decorate([
    (0, graphql_2.ArgsType)()
], ComissionPaymentConfigurationAggregateArgs);
exports.ComissionPaymentConfigurationAggregateArgs = ComissionPaymentConfigurationAggregateArgs;
//# sourceMappingURL=comission-payment-configuration-aggregate.args.js.map