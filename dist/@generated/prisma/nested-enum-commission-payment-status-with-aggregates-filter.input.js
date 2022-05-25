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
var NestedEnumCommissionPaymentStatusWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumCommissionPaymentStatusWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const commission_payment_status_enum_1 = require("./commission-payment-status.enum");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_enum_commission_payment_status_filter_input_1 = require("./nested-enum-commission-payment-status-filter.input");
let NestedEnumCommissionPaymentStatusWithAggregatesFilter = NestedEnumCommissionPaymentStatusWithAggregatesFilter_1 = class NestedEnumCommissionPaymentStatusWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => commission_payment_status_enum_1.CommissionPaymentStatus, { nullable: true }),
    __metadata("design:type", Object)
], NestedEnumCommissionPaymentStatusWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_status_enum_1.CommissionPaymentStatus], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumCommissionPaymentStatusWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_status_enum_1.CommissionPaymentStatus], { nullable: true }),
    __metadata("design:type", Array)
], NestedEnumCommissionPaymentStatusWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumCommissionPaymentStatusWithAggregatesFilter_1, { nullable: true }),
    __metadata("design:type", NestedEnumCommissionPaymentStatusWithAggregatesFilter)
], NestedEnumCommissionPaymentStatusWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    __metadata("design:type", nested_int_filter_input_1.NestedIntFilter)
], NestedEnumCommissionPaymentStatusWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_commission_payment_status_filter_input_1.NestedEnumCommissionPaymentStatusFilter, { nullable: true }),
    __metadata("design:type", nested_enum_commission_payment_status_filter_input_1.NestedEnumCommissionPaymentStatusFilter)
], NestedEnumCommissionPaymentStatusWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_commission_payment_status_filter_input_1.NestedEnumCommissionPaymentStatusFilter, { nullable: true }),
    __metadata("design:type", nested_enum_commission_payment_status_filter_input_1.NestedEnumCommissionPaymentStatusFilter)
], NestedEnumCommissionPaymentStatusWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumCommissionPaymentStatusWithAggregatesFilter = NestedEnumCommissionPaymentStatusWithAggregatesFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedEnumCommissionPaymentStatusWithAggregatesFilter);
exports.NestedEnumCommissionPaymentStatusWithAggregatesFilter = NestedEnumCommissionPaymentStatusWithAggregatesFilter;
//# sourceMappingURL=nested-enum-commission-payment-status-with-aggregates-filter.input.js.map