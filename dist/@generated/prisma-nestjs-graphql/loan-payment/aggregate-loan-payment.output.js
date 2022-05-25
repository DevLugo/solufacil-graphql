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
exports.AggregateLoanPayment = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_payment_count_aggregate_output_1 = require("./loan-payment-count-aggregate.output");
const loan_payment_avg_aggregate_output_1 = require("./loan-payment-avg-aggregate.output");
const loan_payment_sum_aggregate_output_1 = require("./loan-payment-sum-aggregate.output");
const loan_payment_min_aggregate_output_1 = require("./loan-payment-min-aggregate.output");
const loan_payment_max_aggregate_output_1 = require("./loan-payment-max-aggregate.output");
let AggregateLoanPayment = class AggregateLoanPayment {
};
__decorate([
    (0, graphql_1.Field)(() => loan_payment_count_aggregate_output_1.LoanPaymentCountAggregate, { nullable: true }),
    __metadata("design:type", loan_payment_count_aggregate_output_1.LoanPaymentCountAggregate)
], AggregateLoanPayment.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_avg_aggregate_output_1.LoanPaymentAvgAggregate, { nullable: true }),
    __metadata("design:type", loan_payment_avg_aggregate_output_1.LoanPaymentAvgAggregate)
], AggregateLoanPayment.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_sum_aggregate_output_1.LoanPaymentSumAggregate, { nullable: true }),
    __metadata("design:type", loan_payment_sum_aggregate_output_1.LoanPaymentSumAggregate)
], AggregateLoanPayment.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_min_aggregate_output_1.LoanPaymentMinAggregate, { nullable: true }),
    __metadata("design:type", loan_payment_min_aggregate_output_1.LoanPaymentMinAggregate)
], AggregateLoanPayment.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_max_aggregate_output_1.LoanPaymentMaxAggregate, { nullable: true }),
    __metadata("design:type", loan_payment_max_aggregate_output_1.LoanPaymentMaxAggregate)
], AggregateLoanPayment.prototype, "_max", void 0);
AggregateLoanPayment = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateLoanPayment);
exports.AggregateLoanPayment = AggregateLoanPayment;
//# sourceMappingURL=aggregate-loan-payment.output.js.map