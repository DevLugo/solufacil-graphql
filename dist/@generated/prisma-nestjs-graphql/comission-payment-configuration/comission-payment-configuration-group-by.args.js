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
exports.ComissionPaymentConfigurationGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const comission_payment_configuration_where_input_1 = require("./comission-payment-configuration-where.input");
const comission_payment_configuration_order_by_with_aggregation_input_1 = require("./comission-payment-configuration-order-by-with-aggregation.input");
const comission_payment_configuration_scalar_field_enum_1 = require("./comission-payment-configuration-scalar-field.enum");
const comission_payment_configuration_scalar_where_with_aggregates_input_1 = require("./comission-payment-configuration-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const comission_payment_configuration_count_aggregate_input_1 = require("./comission-payment-configuration-count-aggregate.input");
const comission_payment_configuration_min_aggregate_input_1 = require("./comission-payment-configuration-min-aggregate.input");
const comission_payment_configuration_max_aggregate_input_1 = require("./comission-payment-configuration-max-aggregate.input");
let ComissionPaymentConfigurationGroupByArgs = class ComissionPaymentConfigurationGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_where_input_1.ComissionPaymentConfigurationWhereInput, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_where_input_1.ComissionPaymentConfigurationWhereInput)
], ComissionPaymentConfigurationGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comission_payment_configuration_order_by_with_aggregation_input_1.ComissionPaymentConfigurationOrderByWithAggregationInput], { nullable: true }),
    __metadata("design:type", Array)
], ComissionPaymentConfigurationGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [comission_payment_configuration_scalar_field_enum_1.ComissionPaymentConfigurationScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], ComissionPaymentConfigurationGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_scalar_where_with_aggregates_input_1.ComissionPaymentConfigurationScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_scalar_where_with_aggregates_input_1.ComissionPaymentConfigurationScalarWhereWithAggregatesInput)
], ComissionPaymentConfigurationGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ComissionPaymentConfigurationGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], ComissionPaymentConfigurationGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_count_aggregate_input_1.ComissionPaymentConfigurationCountAggregateInput, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_count_aggregate_input_1.ComissionPaymentConfigurationCountAggregateInput)
], ComissionPaymentConfigurationGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_min_aggregate_input_1.ComissionPaymentConfigurationMinAggregateInput, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_min_aggregate_input_1.ComissionPaymentConfigurationMinAggregateInput)
], ComissionPaymentConfigurationGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_max_aggregate_input_1.ComissionPaymentConfigurationMaxAggregateInput, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_max_aggregate_input_1.ComissionPaymentConfigurationMaxAggregateInput)
], ComissionPaymentConfigurationGroupByArgs.prototype, "_max", void 0);
ComissionPaymentConfigurationGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], ComissionPaymentConfigurationGroupByArgs);
exports.ComissionPaymentConfigurationGroupByArgs = ComissionPaymentConfigurationGroupByArgs;
//# sourceMappingURL=comission-payment-configuration-group-by.args.js.map