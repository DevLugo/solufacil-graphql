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
exports.ComissionPaymentConfigurationOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const comission_payment_configuration_count_order_by_aggregate_input_1 = require("./comission-payment-configuration-count-order-by-aggregate.input");
const comission_payment_configuration_max_order_by_aggregate_input_1 = require("./comission-payment-configuration-max-order-by-aggregate.input");
const comission_payment_configuration_min_order_by_aggregate_input_1 = require("./comission-payment-configuration-min-order-by-aggregate.input");
let ComissionPaymentConfigurationOrderByWithAggregationInput = class ComissionPaymentConfigurationOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ComissionPaymentConfigurationOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ComissionPaymentConfigurationOrderByWithAggregationInput.prototype, "employeeType", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ComissionPaymentConfigurationOrderByWithAggregationInput.prototype, "loantypeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ComissionPaymentConfigurationOrderByWithAggregationInput.prototype, "commissionGoalType", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ComissionPaymentConfigurationOrderByWithAggregationInput.prototype, "commissionType", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_count_order_by_aggregate_input_1.ComissionPaymentConfigurationCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_count_order_by_aggregate_input_1.ComissionPaymentConfigurationCountOrderByAggregateInput)
], ComissionPaymentConfigurationOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_max_order_by_aggregate_input_1.ComissionPaymentConfigurationMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_max_order_by_aggregate_input_1.ComissionPaymentConfigurationMaxOrderByAggregateInput)
], ComissionPaymentConfigurationOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => comission_payment_configuration_min_order_by_aggregate_input_1.ComissionPaymentConfigurationMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", comission_payment_configuration_min_order_by_aggregate_input_1.ComissionPaymentConfigurationMinOrderByAggregateInput)
], ComissionPaymentConfigurationOrderByWithAggregationInput.prototype, "_min", void 0);
ComissionPaymentConfigurationOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], ComissionPaymentConfigurationOrderByWithAggregationInput);
exports.ComissionPaymentConfigurationOrderByWithAggregationInput = ComissionPaymentConfigurationOrderByWithAggregationInput;
//# sourceMappingURL=comission-payment-configuration-order-by-with-aggregation.input.js.map