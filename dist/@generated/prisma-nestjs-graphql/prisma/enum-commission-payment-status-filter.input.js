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
exports.EnumCommissionPaymentStatusFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const commission_payment_status_enum_1 = require("./commission-payment-status.enum");
const nested_enum_commission_payment_status_filter_input_1 = require("./nested-enum-commission-payment-status-filter.input");
let EnumCommissionPaymentStatusFilter = class EnumCommissionPaymentStatusFilter {
};
__decorate([
    (0, graphql_1.Field)(() => commission_payment_status_enum_1.CommissionPaymentStatus, { nullable: true }),
    __metadata("design:type", Object)
], EnumCommissionPaymentStatusFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_status_enum_1.CommissionPaymentStatus], { nullable: true }),
    __metadata("design:type", Array)
], EnumCommissionPaymentStatusFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_status_enum_1.CommissionPaymentStatus], { nullable: true }),
    __metadata("design:type", Array)
], EnumCommissionPaymentStatusFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_commission_payment_status_filter_input_1.NestedEnumCommissionPaymentStatusFilter, { nullable: true }),
    __metadata("design:type", nested_enum_commission_payment_status_filter_input_1.NestedEnumCommissionPaymentStatusFilter)
], EnumCommissionPaymentStatusFilter.prototype, "not", void 0);
EnumCommissionPaymentStatusFilter = __decorate([
    (0, graphql_2.InputType)()
], EnumCommissionPaymentStatusFilter);
exports.EnumCommissionPaymentStatusFilter = EnumCommissionPaymentStatusFilter;
//# sourceMappingURL=enum-commission-payment-status-filter.input.js.map