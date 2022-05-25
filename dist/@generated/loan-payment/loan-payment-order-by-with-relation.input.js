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
exports.LoanPaymentOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const graphql_3 = require("@nestjs/graphql");
const payment_schedule_order_by_relation_aggregate_input_1 = require("../payment-schedule/payment-schedule-order-by-relation-aggregate.input");
const loan_order_by_with_relation_input_1 = require("../loan/loan-order-by-with-relation.input");
const employee_order_by_with_relation_input_1 = require("../employee/employee-order-by-with-relation.input");
let LoanPaymentOrderByWithRelationInput = class LoanPaymentOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanPaymentOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanPaymentOrderByWithRelationInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanPaymentOrderByWithRelationInput.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanPaymentOrderByWithRelationInput.prototype, "comments", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LoanPaymentOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], LoanPaymentOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_order_by_relation_aggregate_input_1.PaymentScheduleOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", payment_schedule_order_by_relation_aggregate_input_1.PaymentScheduleOrderByRelationAggregateInput)
], LoanPaymentOrderByWithRelationInput.prototype, "paymentSchedules", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_order_by_with_relation_input_1.LoanOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", loan_order_by_with_relation_input_1.LoanOrderByWithRelationInput)
], LoanPaymentOrderByWithRelationInput.prototype, "loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanPaymentOrderByWithRelationInput.prototype, "loanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_order_by_with_relation_input_1.EmployeeOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", employee_order_by_with_relation_input_1.EmployeeOrderByWithRelationInput)
], LoanPaymentOrderByWithRelationInput.prototype, "employee", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], LoanPaymentOrderByWithRelationInput.prototype, "employeeId", void 0);
LoanPaymentOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], LoanPaymentOrderByWithRelationInput);
exports.LoanPaymentOrderByWithRelationInput = LoanPaymentOrderByWithRelationInput;
//# sourceMappingURL=loan-payment-order-by-with-relation.input.js.map