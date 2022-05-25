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
exports.LoanPaymentCreateNestedManyWithoutEmployeeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_payment_create_without_employee_input_1 = require("./loan-payment-create-without-employee.input");
const loan_payment_create_or_connect_without_employee_input_1 = require("./loan-payment-create-or-connect-without-employee.input");
const loan_payment_create_many_employee_input_envelope_input_1 = require("./loan-payment-create-many-employee-input-envelope.input");
const loan_payment_where_unique_input_1 = require("./loan-payment-where-unique.input");
let LoanPaymentCreateNestedManyWithoutEmployeeInput = class LoanPaymentCreateNestedManyWithoutEmployeeInput {
};
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_create_without_employee_input_1.LoanPaymentCreateWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentCreateNestedManyWithoutEmployeeInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_create_or_connect_without_employee_input_1.LoanPaymentCreateOrConnectWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentCreateNestedManyWithoutEmployeeInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_payment_create_many_employee_input_envelope_input_1.LoanPaymentCreateManyEmployeeInputEnvelope, { nullable: true }),
    __metadata("design:type", loan_payment_create_many_employee_input_envelope_input_1.LoanPaymentCreateManyEmployeeInputEnvelope)
], LoanPaymentCreateNestedManyWithoutEmployeeInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_payment_where_unique_input_1.LoanPaymentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LoanPaymentCreateNestedManyWithoutEmployeeInput.prototype, "connect", void 0);
LoanPaymentCreateNestedManyWithoutEmployeeInput = __decorate([
    (0, graphql_2.InputType)()
], LoanPaymentCreateNestedManyWithoutEmployeeInput);
exports.LoanPaymentCreateNestedManyWithoutEmployeeInput = LoanPaymentCreateNestedManyWithoutEmployeeInput;
//# sourceMappingURL=loan-payment-create-nested-many-without-employee.input.js.map