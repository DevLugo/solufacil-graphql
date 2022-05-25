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
exports.LoanOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const graphql_3 = require("@nestjs/graphql");
const loan_payment_order_by_relation_aggregate_input_1 = require("../loan-payment/loan-payment-order-by-relation-aggregate.input");
const loantype_order_by_with_relation_input_1 = require("../loantype/loantype-order-by-with-relation.input");
const employee_order_by_with_relation_input_1 = require("../employee/employee-order-by-with-relation.input");
const contract_order_by_with_relation_input_1 = require("../contract/contract-order-by-with-relation.input");
const payment_schedule_order_by_relation_aggregate_input_1 = require("../payment-schedule/payment-schedule-order-by-relation-aggregate.input");
const commission_payment_order_by_relation_aggregate_input_1 = require("../commission-payment/commission-payment-order-by-relation-aggregate.input");
let LoanOrderByWithRelationInput = class LoanOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LoanOrderByWithRelationInput.prototype, "status", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", loan_payment_order_by_relation_aggregate_input_1.LoanPaymentOrderByRelationAggregateInput)
], LoanOrderByWithRelationInput.prototype, "payments", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanOrderByWithRelationInput.prototype, "weeklyPaymentAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanOrderByWithRelationInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_order_by_with_relation_input_1.LoantypeOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", loantype_order_by_with_relation_input_1.LoantypeOrderByWithRelationInput)
], LoanOrderByWithRelationInput.prototype, "loanType", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanOrderByWithRelationInput.prototype, "signDate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LoanOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_order_by_with_relation_input_1.EmployeeOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", employee_order_by_with_relation_input_1.EmployeeOrderByWithRelationInput)
], LoanOrderByWithRelationInput.prototype, "employee", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LoanOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_order_by_with_relation_input_1.ContractOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", contract_order_by_with_relation_input_1.ContractOrderByWithRelationInput)
], LoanOrderByWithRelationInput.prototype, "contract", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanOrderByWithRelationInput.prototype, "contractId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanOrderByWithRelationInput.prototype, "loantypeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanOrderByWithRelationInput.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_order_by_relation_aggregate_input_1.PaymentScheduleOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", payment_schedule_order_by_relation_aggregate_input_1.PaymentScheduleOrderByRelationAggregateInput)
], LoanOrderByWithRelationInput.prototype, "paymentSchedule", void 0);
__decorate([
    (0, graphql_1.Field)(() => commission_payment_order_by_relation_aggregate_input_1.CommissionPaymentOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", commission_payment_order_by_relation_aggregate_input_1.CommissionPaymentOrderByRelationAggregateInput)
], LoanOrderByWithRelationInput.prototype, "CommissionPayment", void 0);
LoanOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], LoanOrderByWithRelationInput);
exports.LoanOrderByWithRelationInput = LoanOrderByWithRelationInput;
//# sourceMappingURL=loan-order-by-with-relation.input.js.map