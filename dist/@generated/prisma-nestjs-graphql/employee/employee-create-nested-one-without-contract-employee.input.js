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
exports.EmployeeCreateNestedOneWithoutContractEmployeeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const employee_create_without_contract_employee_input_1 = require("./employee-create-without-contract-employee.input");
const employee_create_or_connect_without_contract_employee_input_1 = require("./employee-create-or-connect-without-contract-employee.input");
const employee_where_unique_input_1 = require("./employee-where-unique.input");
let EmployeeCreateNestedOneWithoutContractEmployeeInput = class EmployeeCreateNestedOneWithoutContractEmployeeInput {
};
__decorate([
    (0, graphql_1.Field)(() => employee_create_without_contract_employee_input_1.EmployeeCreateWithoutContractEmployeeInput, { nullable: true }),
    __metadata("design:type", employee_create_without_contract_employee_input_1.EmployeeCreateWithoutContractEmployeeInput)
], EmployeeCreateNestedOneWithoutContractEmployeeInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_create_or_connect_without_contract_employee_input_1.EmployeeCreateOrConnectWithoutContractEmployeeInput, { nullable: true }),
    __metadata("design:type", employee_create_or_connect_without_contract_employee_input_1.EmployeeCreateOrConnectWithoutContractEmployeeInput)
], EmployeeCreateNestedOneWithoutContractEmployeeInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_where_unique_input_1.EmployeeWhereUniqueInput, { nullable: true }),
    __metadata("design:type", employee_where_unique_input_1.EmployeeWhereUniqueInput)
], EmployeeCreateNestedOneWithoutContractEmployeeInput.prototype, "connect", void 0);
EmployeeCreateNestedOneWithoutContractEmployeeInput = __decorate([
    (0, graphql_2.InputType)()
], EmployeeCreateNestedOneWithoutContractEmployeeInput);
exports.EmployeeCreateNestedOneWithoutContractEmployeeInput = EmployeeCreateNestedOneWithoutContractEmployeeInput;
//# sourceMappingURL=employee-create-nested-one-without-contract-employee.input.js.map