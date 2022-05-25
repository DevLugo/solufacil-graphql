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
exports.Loan = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const loan_state_enum_1 = require("../prisma/loan-state.enum");
const loan_payment_model_1 = require("../loan-payment/loan-payment.model");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const runtime_1 = require("@prisma/client/runtime");
const loantype_model_1 = require("../loantype/loantype.model");
const employee_model_1 = require("../employee/employee.model");
const contract_model_1 = require("../contract/contract.model");
const payment_schedule_model_1 = require("../payment-schedule/payment-schedule.model");
const commission_payment_model_1 = require("../commission-payment/commission-payment.model");
const loan_count_output_1 = require("./loan-count.output");
let Loan = class Loan {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", String)
], Loan.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_state_enum_1.LoanState, { nullable: false }),
    __metadata("design:type", Object)
], Loan.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_model_1.LoanPayment], { nullable: true }),
    __metadata("design:type", Array)
], Loan.prototype, "payments", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", runtime_1.Decimal)
], Loan.prototype, "weeklyPaymentAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false, defaultValue: 0 }),
    __metadata("design:type", runtime_1.Decimal)
], Loan.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_model_1.Loantype, { nullable: false }),
    __metadata("design:type", loantype_model_1.Loantype)
], Loan.prototype, "loanType", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Loan.prototype, "signDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Loan.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_model_1.Employee, { nullable: false }),
    __metadata("design:type", employee_model_1.Employee)
], Loan.prototype, "employee", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Loan.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_model_1.Contract, { nullable: false }),
    __metadata("design:type", contract_model_1.Contract)
], Loan.prototype, "contract", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Loan.prototype, "contractId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Loan.prototype, "loantypeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Loan.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_schedule_model_1.PaymentSchedule], { nullable: true }),
    __metadata("design:type", Array)
], Loan.prototype, "paymentSchedule", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_model_1.CommissionPayment], { nullable: true }),
    __metadata("design:type", Array)
], Loan.prototype, "CommissionPayment", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_count_output_1.LoanCount, { nullable: false }),
    __metadata("design:type", loan_count_output_1.LoanCount)
], Loan.prototype, "_count", void 0);
Loan = __decorate([
    (0, graphql_2.ObjectType)()
], Loan);
exports.Loan = Loan;
//# sourceMappingURL=loan.model.js.map