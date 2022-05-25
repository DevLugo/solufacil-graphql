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
exports.ContractUncheckedUpdateManyWithoutEmployeeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const contract_create_without_employee_input_1 = require("./contract-create-without-employee.input");
const contract_create_or_connect_without_employee_input_1 = require("./contract-create-or-connect-without-employee.input");
const contract_upsert_with_where_unique_without_employee_input_1 = require("./contract-upsert-with-where-unique-without-employee.input");
const contract_create_many_employee_input_envelope_input_1 = require("./contract-create-many-employee-input-envelope.input");
const contract_where_unique_input_1 = require("./contract-where-unique.input");
const contract_update_with_where_unique_without_employee_input_1 = require("./contract-update-with-where-unique-without-employee.input");
const contract_update_many_with_where_without_employee_input_1 = require("./contract-update-many-with-where-without-employee.input");
const contract_scalar_where_input_1 = require("./contract-scalar-where.input");
let ContractUncheckedUpdateManyWithoutEmployeeInput = class ContractUncheckedUpdateManyWithoutEmployeeInput {
};
__decorate([
    (0, graphql_1.Field)(() => [contract_create_without_employee_input_1.ContractCreateWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUncheckedUpdateManyWithoutEmployeeInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_create_or_connect_without_employee_input_1.ContractCreateOrConnectWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUncheckedUpdateManyWithoutEmployeeInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_upsert_with_where_unique_without_employee_input_1.ContractUpsertWithWhereUniqueWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUncheckedUpdateManyWithoutEmployeeInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_create_many_employee_input_envelope_input_1.ContractCreateManyEmployeeInputEnvelope, { nullable: true }),
    __metadata("design:type", contract_create_many_employee_input_envelope_input_1.ContractCreateManyEmployeeInputEnvelope)
], ContractUncheckedUpdateManyWithoutEmployeeInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_where_unique_input_1.ContractWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUncheckedUpdateManyWithoutEmployeeInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_where_unique_input_1.ContractWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUncheckedUpdateManyWithoutEmployeeInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_where_unique_input_1.ContractWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUncheckedUpdateManyWithoutEmployeeInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_where_unique_input_1.ContractWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUncheckedUpdateManyWithoutEmployeeInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_update_with_where_unique_without_employee_input_1.ContractUpdateWithWhereUniqueWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUncheckedUpdateManyWithoutEmployeeInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_update_many_with_where_without_employee_input_1.ContractUpdateManyWithWhereWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUncheckedUpdateManyWithoutEmployeeInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_scalar_where_input_1.ContractScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ContractUncheckedUpdateManyWithoutEmployeeInput.prototype, "deleteMany", void 0);
ContractUncheckedUpdateManyWithoutEmployeeInput = __decorate([
    (0, graphql_2.InputType)()
], ContractUncheckedUpdateManyWithoutEmployeeInput);
exports.ContractUncheckedUpdateManyWithoutEmployeeInput = ContractUncheckedUpdateManyWithoutEmployeeInput;
//# sourceMappingURL=contract-unchecked-update-many-without-employee.input.js.map