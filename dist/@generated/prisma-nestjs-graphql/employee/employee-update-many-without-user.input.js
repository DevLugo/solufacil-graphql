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
exports.EmployeeUpdateManyWithoutUserInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const employee_create_without_user_input_1 = require("./employee-create-without-user.input");
const employee_create_or_connect_without_user_input_1 = require("./employee-create-or-connect-without-user.input");
const employee_upsert_with_where_unique_without_user_input_1 = require("./employee-upsert-with-where-unique-without-user.input");
const employee_create_many_user_input_envelope_input_1 = require("./employee-create-many-user-input-envelope.input");
const employee_where_unique_input_1 = require("./employee-where-unique.input");
const employee_update_with_where_unique_without_user_input_1 = require("./employee-update-with-where-unique-without-user.input");
const employee_update_many_with_where_without_user_input_1 = require("./employee-update-many-with-where-without-user.input");
const employee_scalar_where_input_1 = require("./employee-scalar-where.input");
let EmployeeUpdateManyWithoutUserInput = class EmployeeUpdateManyWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => [employee_create_without_user_input_1.EmployeeCreateWithoutUserInput], { nullable: true }),
    __metadata("design:type", Array)
], EmployeeUpdateManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [employee_create_or_connect_without_user_input_1.EmployeeCreateOrConnectWithoutUserInput], { nullable: true }),
    __metadata("design:type", Array)
], EmployeeUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [employee_upsert_with_where_unique_without_user_input_1.EmployeeUpsertWithWhereUniqueWithoutUserInput], { nullable: true }),
    __metadata("design:type", Array)
], EmployeeUpdateManyWithoutUserInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_create_many_user_input_envelope_input_1.EmployeeCreateManyUserInputEnvelope, { nullable: true }),
    __metadata("design:type", employee_create_many_user_input_envelope_input_1.EmployeeCreateManyUserInputEnvelope)
], EmployeeUpdateManyWithoutUserInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [employee_where_unique_input_1.EmployeeWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], EmployeeUpdateManyWithoutUserInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [employee_where_unique_input_1.EmployeeWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], EmployeeUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [employee_where_unique_input_1.EmployeeWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], EmployeeUpdateManyWithoutUserInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [employee_where_unique_input_1.EmployeeWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], EmployeeUpdateManyWithoutUserInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [employee_update_with_where_unique_without_user_input_1.EmployeeUpdateWithWhereUniqueWithoutUserInput], { nullable: true }),
    __metadata("design:type", Array)
], EmployeeUpdateManyWithoutUserInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [employee_update_many_with_where_without_user_input_1.EmployeeUpdateManyWithWhereWithoutUserInput], { nullable: true }),
    __metadata("design:type", Array)
], EmployeeUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [employee_scalar_where_input_1.EmployeeScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], EmployeeUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
EmployeeUpdateManyWithoutUserInput = __decorate([
    (0, graphql_2.InputType)()
], EmployeeUpdateManyWithoutUserInput);
exports.EmployeeUpdateManyWithoutUserInput = EmployeeUpdateManyWithoutUserInput;
//# sourceMappingURL=employee-update-many-without-user.input.js.map