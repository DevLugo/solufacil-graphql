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
exports.ContractUncheckedCreateNestedManyWithoutEmployeeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const contract_create_without_employee_input_1 = require("./contract-create-without-employee.input");
const contract_create_or_connect_without_employee_input_1 = require("./contract-create-or-connect-without-employee.input");
const contract_create_many_employee_input_envelope_input_1 = require("./contract-create-many-employee-input-envelope.input");
const contract_where_unique_input_1 = require("./contract-where-unique.input");
let ContractUncheckedCreateNestedManyWithoutEmployeeInput = class ContractUncheckedCreateNestedManyWithoutEmployeeInput {
};
__decorate([
    (0, graphql_1.Field)(() => [contract_create_without_employee_input_1.ContractCreateWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUncheckedCreateNestedManyWithoutEmployeeInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_create_or_connect_without_employee_input_1.ContractCreateOrConnectWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUncheckedCreateNestedManyWithoutEmployeeInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_create_many_employee_input_envelope_input_1.ContractCreateManyEmployeeInputEnvelope, { nullable: true }),
    __metadata("design:type", contract_create_many_employee_input_envelope_input_1.ContractCreateManyEmployeeInputEnvelope)
], ContractUncheckedCreateNestedManyWithoutEmployeeInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_where_unique_input_1.ContractWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUncheckedCreateNestedManyWithoutEmployeeInput.prototype, "connect", void 0);
ContractUncheckedCreateNestedManyWithoutEmployeeInput = __decorate([
    (0, graphql_2.InputType)()
], ContractUncheckedCreateNestedManyWithoutEmployeeInput);
exports.ContractUncheckedCreateNestedManyWithoutEmployeeInput = ContractUncheckedCreateNestedManyWithoutEmployeeInput;
//# sourceMappingURL=contract-unchecked-create-nested-many-without-employee.input.js.map