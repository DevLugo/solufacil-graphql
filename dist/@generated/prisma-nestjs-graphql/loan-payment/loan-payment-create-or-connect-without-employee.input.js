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
exports.LoanPaymentCreateOrConnectWithoutEmployeeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_payment_where_unique_input_1 = require("./loan-payment-where-unique.input");
const loan_payment_create_without_employee_input_1 = require("./loan-payment-create-without-employee.input");
let LoanPaymentCreateOrConnectWithoutEmployeeInput = class LoanPaymentCreateOrConnectWithoutEmployeeInput {
};
__decorate([
    (0, graphql_1.Field)(() => loan_payment_where_unique_input_1.LoanPaymentWhereUniqueInput, { nullable: false }),
    __metadata("design:type", loan_payment_where_unique_input_1.LoanPaymentWhereUniqueInput)
], LoanPaymentCreateOrConnectWithoutEmployeeInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_create_without_employee_input_1.LoanPaymentCreateWithoutEmployeeInput, { nullable: false }),
    __metadata("design:type", loan_payment_create_without_employee_input_1.LoanPaymentCreateWithoutEmployeeInput)
], LoanPaymentCreateOrConnectWithoutEmployeeInput.prototype, "create", void 0);
LoanPaymentCreateOrConnectWithoutEmployeeInput = __decorate([
    (0, graphql_2.InputType)()
], LoanPaymentCreateOrConnectWithoutEmployeeInput);
exports.LoanPaymentCreateOrConnectWithoutEmployeeInput = LoanPaymentCreateOrConnectWithoutEmployeeInput;
//# sourceMappingURL=loan-payment-create-or-connect-without-employee.input.js.map