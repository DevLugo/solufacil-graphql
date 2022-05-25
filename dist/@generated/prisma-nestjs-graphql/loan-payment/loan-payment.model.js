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
exports.LoanPayment = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const runtime_1 = require("@prisma/client/runtime");
const payment_schedule_model_1 = require("../payment-schedule/payment-schedule.model");
const loan_model_1 = require("../loan/loan.model");
const employee_model_1 = require("../employee/employee.model");
const loan_payment_count_output_1 = require("../loan/loan-payment-count.output");
let LoanPayment = class LoanPayment {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", String)
], LoanPayment.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], LoanPayment.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], LoanPayment.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], LoanPayment.prototype, "comments", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], LoanPayment.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], LoanPayment.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_schedule_model_1.PaymentSchedule], { nullable: true }),
    __metadata("design:type", Array)
], LoanPayment.prototype, "paymentSchedules", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_model_1.Loan, { nullable: false }),
    __metadata("design:type", loan_model_1.Loan)
], LoanPayment.prototype, "loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LoanPayment.prototype, "loanId", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_model_1.Employee, { nullable: false }),
    __metadata("design:type", employee_model_1.Employee)
], LoanPayment.prototype, "employee", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LoanPayment.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_count_output_1.LoanPaymentCount, { nullable: false }),
    __metadata("design:type", loan_payment_count_output_1.LoanPaymentCount)
], LoanPayment.prototype, "_count", void 0);
LoanPayment = __decorate([
    (0, graphql_2.ObjectType)()
], LoanPayment);
exports.LoanPayment = LoanPayment;
//# sourceMappingURL=loan-payment.model.js.map