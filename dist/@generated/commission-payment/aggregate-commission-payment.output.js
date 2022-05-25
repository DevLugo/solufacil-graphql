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
exports.AggregateCommissionPayment = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const commission_payment_count_aggregate_output_1 = require("./commission-payment-count-aggregate.output");
const commission_payment_avg_aggregate_output_1 = require("./commission-payment-avg-aggregate.output");
const commission_payment_sum_aggregate_output_1 = require("./commission-payment-sum-aggregate.output");
const commission_payment_min_aggregate_output_1 = require("./commission-payment-min-aggregate.output");
const commission_payment_max_aggregate_output_1 = require("./commission-payment-max-aggregate.output");
let AggregateCommissionPayment = class AggregateCommissionPayment {
};
__decorate([
    (0, graphql_1.Field)(() => commission_payment_count_aggregate_output_1.CommissionPaymentCountAggregate, { nullable: true }),
    __metadata("design:type", commission_payment_count_aggregate_output_1.CommissionPaymentCountAggregate)
], AggregateCommissionPayment.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_avg_aggregate_output_1.CommissionPaymentAvgAggregate, { nullable: true }),
    __metadata("design:type", commission_payment_avg_aggregate_output_1.CommissionPaymentAvgAggregate)
], AggregateCommissionPayment.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_sum_aggregate_output_1.CommissionPaymentSumAggregate, { nullable: true }),
    __metadata("design:type", commission_payment_sum_aggregate_output_1.CommissionPaymentSumAggregate)
], AggregateCommissionPayment.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_min_aggregate_output_1.CommissionPaymentMinAggregate, { nullable: true }),
    __metadata("design:type", commission_payment_min_aggregate_output_1.CommissionPaymentMinAggregate)
], AggregateCommissionPayment.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_max_aggregate_output_1.CommissionPaymentMaxAggregate, { nullable: true }),
    __metadata("design:type", commission_payment_max_aggregate_output_1.CommissionPaymentMaxAggregate)
], AggregateCommissionPayment.prototype, "_max", void 0);
AggregateCommissionPayment = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateCommissionPayment);
exports.AggregateCommissionPayment = AggregateCommissionPayment;
//# sourceMappingURL=aggregate-commission-payment.output.js.map