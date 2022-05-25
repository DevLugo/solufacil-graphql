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
exports.Employee = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const employees_types_enum_1 = require("../prisma/employees-types.enum");
const phone_model_1 = require("../phone/phone.model");
const document_model_1 = require("../document/document.model");
const user_model_1 = require("../user/user.model");
const loan_model_1 = require("../loan/loan.model");
const loan_payment_model_1 = require("../loan-payment/loan-payment.model");
const commission_payment_model_1 = require("../commission-payment/commission-payment.model");
const contract_model_1 = require("../contract/contract.model");
const expenses_model_1 = require("../expenses/expenses.model");
const employee_count_output_1 = require("./employee-count.output");
let Employee = class Employee {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", String)
], Employee.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => employees_types_enum_1.EmployeesTypes, { nullable: false }),
    __metadata("design:type", Object)
], Employee.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_model_1.Phone], { nullable: true }),
    __metadata("design:type", Array)
], Employee.prototype, "phones", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_model_1.Document], { nullable: true }),
    __metadata("design:type", Array)
], Employee.prototype, "documents", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_model_1.User, { nullable: false }),
    __metadata("design:type", user_model_1.User)
], Employee.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Employee.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Employee.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_model_1.Loan], { nullable: true }),
    __metadata("design:type", Array)
], Employee.prototype, "loan", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Employee.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_model_1.LoanPayment], { nullable: true }),
    __metadata("design:type", Array)
], Employee.prototype, "loanPayment", void 0);
__decorate([
    (0, graphql_1.Field)(() => [commission_payment_model_1.CommissionPayment], { nullable: true }),
    __metadata("design:type", Array)
], Employee.prototype, "commissionPayment", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_model_1.Contract], { nullable: true }),
    __metadata("design:type", Array)
], Employee.prototype, "contractEmployee", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_model_1.Contract], { nullable: true }),
    __metadata("design:type", Array)
], Employee.prototype, "contractLoanLead", void 0);
__decorate([
    (0, graphql_1.Field)(() => [expenses_model_1.Expenses], { nullable: true }),
    __metadata("design:type", Array)
], Employee.prototype, "Expenses", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_count_output_1.EmployeeCount, { nullable: false }),
    __metadata("design:type", employee_count_output_1.EmployeeCount)
], Employee.prototype, "_count", void 0);
Employee = __decorate([
    (0, graphql_2.ObjectType)()
], Employee);
exports.Employee = Employee;
//# sourceMappingURL=employee.model.js.map