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
exports.EmployeeUpsertWithoutLoanInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const employee_update_without_loan_input_1 = require("./employee-update-without-loan.input");
const employee_create_without_loan_input_1 = require("./employee-create-without-loan.input");
let EmployeeUpsertWithoutLoanInput = class EmployeeUpsertWithoutLoanInput {
};
__decorate([
    (0, graphql_1.Field)(() => employee_update_without_loan_input_1.EmployeeUpdateWithoutLoanInput, { nullable: false }),
    __metadata("design:type", employee_update_without_loan_input_1.EmployeeUpdateWithoutLoanInput)
], EmployeeUpsertWithoutLoanInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_create_without_loan_input_1.EmployeeCreateWithoutLoanInput, { nullable: false }),
    __metadata("design:type", employee_create_without_loan_input_1.EmployeeCreateWithoutLoanInput)
], EmployeeUpsertWithoutLoanInput.prototype, "create", void 0);
EmployeeUpsertWithoutLoanInput = __decorate([
    (0, graphql_2.InputType)()
], EmployeeUpsertWithoutLoanInput);
exports.EmployeeUpsertWithoutLoanInput = EmployeeUpsertWithoutLoanInput;
//# sourceMappingURL=employee-upsert-without-loan.input.js.map