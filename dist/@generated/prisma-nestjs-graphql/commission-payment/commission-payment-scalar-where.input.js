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
var CommissionPaymentScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionPaymentScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const decimal_filter_input_1 = require("../prisma/decimal-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const enum_commission_payment_status_filter_input_1 = require("../prisma/enum-commission-payment-status-filter.input");
let CommissionPaymentScalarWhereInput = CommissionPaymentScalarWhereInput_1 = class CommissionPaymentScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [CommissionPaymentScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CommissionPaymentScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CommissionPaymentScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], CommissionPaymentScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CommissionPaymentScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_filter_input_1.DecimalFilter, { nullable: true }),
    __metadata("design:type", decimal_filter_input_1.DecimalFilter)
], CommissionPaymentScalarWhereInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], CommissionPaymentScalarWhereInput.prototype, "loanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CommissionPaymentScalarWhereInput.prototype, "paymentScheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], CommissionPaymentScalarWhereInput.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_commission_payment_status_filter_input_1.EnumCommissionPaymentStatusFilter, { nullable: true }),
    __metadata("design:type", enum_commission_payment_status_filter_input_1.EnumCommissionPaymentStatusFilter)
], CommissionPaymentScalarWhereInput.prototype, "status", void 0);
CommissionPaymentScalarWhereInput = CommissionPaymentScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], CommissionPaymentScalarWhereInput);
exports.CommissionPaymentScalarWhereInput = CommissionPaymentScalarWhereInput;
//# sourceMappingURL=commission-payment-scalar-where.input.js.map