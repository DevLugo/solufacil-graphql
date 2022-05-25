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
exports.PaymentScheduleOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const graphql_3 = require("@nestjs/graphql");
const loan_order_by_with_relation_input_1 = require("../loan/loan-order-by-with-relation.input");
const loan_payment_order_by_relation_aggregate_input_1 = require("../loan-payment/loan-payment-order-by-relation-aggregate.input");
const commission_payment_order_by_relation_aggregate_input_1 = require("../commission-payment/commission-payment-order-by-relation-aggregate.input");
let PaymentScheduleOrderByWithRelationInput = class PaymentScheduleOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithRelationInput.prototype, "numeration", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithRelationInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithRelationInput.prototype, "paidAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithRelationInput.prototype, "returnToCapital", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithRelationInput.prototype, "profit", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithRelationInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithRelationInput.prototype, "delayed", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithRelationInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithRelationInput.prototype, "details", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_order_by_with_relation_input_1.LoanOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", loan_order_by_with_relation_input_1.LoanOrderByWithRelationInput)
], PaymentScheduleOrderByWithRelationInput.prototype, "loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PaymentScheduleOrderByWithRelationInput.prototype, "loanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_order_by_relation_aggregate_input_1.LoanPaymentOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", loan_payment_order_by_relation_aggregate_input_1.LoanPaymentOrderByRelationAggregateInput)
], PaymentScheduleOrderByWithRelationInput.prototype, "loanPayments", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_order_by_relation_aggregate_input_1.CommissionPaymentOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", commission_payment_order_by_relation_aggregate_input_1.CommissionPaymentOrderByRelationAggregateInput)
], PaymentScheduleOrderByWithRelationInput.prototype, "CommissionPayment", void 0);
PaymentScheduleOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], PaymentScheduleOrderByWithRelationInput);
exports.PaymentScheduleOrderByWithRelationInput = PaymentScheduleOrderByWithRelationInput;
//# sourceMappingURL=payment-schedule-order-by-with-relation.input.js.map