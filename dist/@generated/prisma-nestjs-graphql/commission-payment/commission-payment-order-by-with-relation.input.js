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
exports.CommissionPaymentOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const payment_schedule_order_by_with_relation_input_1 = require("../payment-schedule/payment-schedule-order-by-with-relation.input");
const loan_order_by_with_relation_input_1 = require("../loan/loan-order-by-with-relation.input");
const employee_order_by_with_relation_input_1 = require("../employee/employee-order-by-with-relation.input");
let CommissionPaymentOrderByWithRelationInput = class CommissionPaymentOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommissionPaymentOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommissionPaymentOrderByWithRelationInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => payment_schedule_order_by_with_relation_input_1.PaymentScheduleOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", payment_schedule_order_by_with_relation_input_1.PaymentScheduleOrderByWithRelationInput)
], CommissionPaymentOrderByWithRelationInput.prototype, "paymentSchedule", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_order_by_with_relation_input_1.LoanOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", loan_order_by_with_relation_input_1.LoanOrderByWithRelationInput)
], CommissionPaymentOrderByWithRelationInput.prototype, "loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_order_by_with_relation_input_1.EmployeeOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", employee_order_by_with_relation_input_1.EmployeeOrderByWithRelationInput)
], CommissionPaymentOrderByWithRelationInput.prototype, "employee", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommissionPaymentOrderByWithRelationInput.prototype, "loanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommissionPaymentOrderByWithRelationInput.prototype, "paymentScheduleId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommissionPaymentOrderByWithRelationInput.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], CommissionPaymentOrderByWithRelationInput.prototype, "status", void 0);
CommissionPaymentOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], CommissionPaymentOrderByWithRelationInput);
exports.CommissionPaymentOrderByWithRelationInput = CommissionPaymentOrderByWithRelationInput;
//# sourceMappingURL=commission-payment-order-by-with-relation.input.js.map