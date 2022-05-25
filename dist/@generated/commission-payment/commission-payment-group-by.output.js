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
exports.CommissionPaymentGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const runtime_1 = require("@prisma/client/runtime");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const commission_payment_status_enum_1 = require("../prisma/commission-payment-status.enum");
const commission_payment_count_aggregate_output_1 = require("./commission-payment-count-aggregate.output");
const commission_payment_avg_aggregate_output_1 = require("./commission-payment-avg-aggregate.output");
const commission_payment_sum_aggregate_output_1 = require("./commission-payment-sum-aggregate.output");
const commission_payment_min_aggregate_output_1 = require("./commission-payment-min-aggregate.output");
const commission_payment_max_aggregate_output_1 = require("./commission-payment-max-aggregate.output");
let CommissionPaymentGroupBy = class CommissionPaymentGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CommissionPaymentGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], CommissionPaymentGroupBy.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], CommissionPaymentGroupBy.prototype, "loanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CommissionPaymentGroupBy.prototype, "paymentScheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], CommissionPaymentGroupBy.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_status_enum_1.CommissionPaymentStatus, { nullable: false }),
    __metadata("design:type", Object)
], CommissionPaymentGroupBy.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_count_aggregate_output_1.CommissionPaymentCountAggregate, { nullable: true }),
    __metadata("design:type", commission_payment_count_aggregate_output_1.CommissionPaymentCountAggregate)
], CommissionPaymentGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_avg_aggregate_output_1.CommissionPaymentAvgAggregate, { nullable: true }),
    __metadata("design:type", commission_payment_avg_aggregate_output_1.CommissionPaymentAvgAggregate)
], CommissionPaymentGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_sum_aggregate_output_1.CommissionPaymentSumAggregate, { nullable: true }),
    __metadata("design:type", commission_payment_sum_aggregate_output_1.CommissionPaymentSumAggregate)
], CommissionPaymentGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_min_aggregate_output_1.CommissionPaymentMinAggregate, { nullable: true }),
    __metadata("design:type", commission_payment_min_aggregate_output_1.CommissionPaymentMinAggregate)
], CommissionPaymentGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_max_aggregate_output_1.CommissionPaymentMaxAggregate, { nullable: true }),
    __metadata("design:type", commission_payment_max_aggregate_output_1.CommissionPaymentMaxAggregate)
], CommissionPaymentGroupBy.prototype, "_max", void 0);
CommissionPaymentGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], CommissionPaymentGroupBy);
exports.CommissionPaymentGroupBy = CommissionPaymentGroupBy;
//# sourceMappingURL=commission-payment-group-by.output.js.map