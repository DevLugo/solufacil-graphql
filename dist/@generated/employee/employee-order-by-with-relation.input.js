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
exports.EmployeeOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const phone_order_by_relation_aggregate_input_1 = require("../phone/phone-order-by-relation-aggregate.input");
const document_order_by_relation_aggregate_input_1 = require("../document/document-order-by-relation-aggregate.input");
const user_order_by_with_relation_input_1 = require("../user/user-order-by-with-relation.input");
const graphql_3 = require("@nestjs/graphql");
const loan_order_by_relation_aggregate_input_1 = require("../loan/loan-order-by-relation-aggregate.input");
const loan_payment_order_by_relation_aggregate_input_1 = require("../loan-payment/loan-payment-order-by-relation-aggregate.input");
const commission_payment_order_by_relation_aggregate_input_1 = require("../commission-payment/commission-payment-order-by-relation-aggregate.input");
const contract_order_by_relation_aggregate_input_1 = require("../contract/contract-order-by-relation-aggregate.input");
const expenses_order_by_relation_aggregate_input_1 = require("../expenses/expenses-order-by-relation-aggregate.input");
let EmployeeOrderByWithRelationInput = class EmployeeOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], EmployeeOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], EmployeeOrderByWithRelationInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_order_by_relation_aggregate_input_1.PhoneOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", phone_order_by_relation_aggregate_input_1.PhoneOrderByRelationAggregateInput)
], EmployeeOrderByWithRelationInput.prototype, "phones", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_order_by_relation_aggregate_input_1.DocumentOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", document_order_by_relation_aggregate_input_1.DocumentOrderByRelationAggregateInput)
], EmployeeOrderByWithRelationInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_order_by_with_relation_input_1.UserOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", user_order_by_with_relation_input_1.UserOrderByWithRelationInput)
], EmployeeOrderByWithRelationInput.prototype, "user", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], EmployeeOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], EmployeeOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_order_by_relation_aggregate_input_1.LoanOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", loan_order_by_relation_aggregate_input_1.LoanOrderByRelationAggregateInput)
], EmployeeOrderByWithRelationInput.prototype, "loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], EmployeeOrderByWithRelationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_order_by_relation_aggregate_input_1.LoanPaymentOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", loan_payment_order_by_relation_aggregate_input_1.LoanPaymentOrderByRelationAggregateInput)
], EmployeeOrderByWithRelationInput.prototype, "loanPayment", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_order_by_relation_aggregate_input_1.CommissionPaymentOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", commission_payment_order_by_relation_aggregate_input_1.CommissionPaymentOrderByRelationAggregateInput)
], EmployeeOrderByWithRelationInput.prototype, "commissionPayment", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_order_by_relation_aggregate_input_1.ContractOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", contract_order_by_relation_aggregate_input_1.ContractOrderByRelationAggregateInput)
], EmployeeOrderByWithRelationInput.prototype, "contractEmployee", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_order_by_relation_aggregate_input_1.ContractOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", contract_order_by_relation_aggregate_input_1.ContractOrderByRelationAggregateInput)
], EmployeeOrderByWithRelationInput.prototype, "contractLoanLead", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_order_by_relation_aggregate_input_1.ExpensesOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", expenses_order_by_relation_aggregate_input_1.ExpensesOrderByRelationAggregateInput)
], EmployeeOrderByWithRelationInput.prototype, "Expenses", void 0);
EmployeeOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], EmployeeOrderByWithRelationInput);
exports.EmployeeOrderByWithRelationInput = EmployeeOrderByWithRelationInput;
//# sourceMappingURL=employee-order-by-with-relation.input.js.map