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
exports.ExpensesUpdateManyWithoutEmployeeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const expenses_create_without_employee_input_1 = require("./expenses-create-without-employee.input");
const expenses_create_or_connect_without_employee_input_1 = require("./expenses-create-or-connect-without-employee.input");
const expenses_upsert_with_where_unique_without_employee_input_1 = require("./expenses-upsert-with-where-unique-without-employee.input");
const expenses_create_many_employee_input_envelope_input_1 = require("./expenses-create-many-employee-input-envelope.input");
const expenses_where_unique_input_1 = require("./expenses-where-unique.input");
const expenses_update_with_where_unique_without_employee_input_1 = require("./expenses-update-with-where-unique-without-employee.input");
const expenses_update_many_with_where_without_employee_input_1 = require("./expenses-update-many-with-where-without-employee.input");
const expenses_scalar_where_input_1 = require("./expenses-scalar-where.input");
let ExpensesUpdateManyWithoutEmployeeInput = class ExpensesUpdateManyWithoutEmployeeInput {
};
__decorate([
    (0, graphql_1.Field)(() => [expenses_create_without_employee_input_1.ExpensesCreateWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], ExpensesUpdateManyWithoutEmployeeInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [expenses_create_or_connect_without_employee_input_1.ExpensesCreateOrConnectWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], ExpensesUpdateManyWithoutEmployeeInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [expenses_upsert_with_where_unique_without_employee_input_1.ExpensesUpsertWithWhereUniqueWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], ExpensesUpdateManyWithoutEmployeeInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_create_many_employee_input_envelope_input_1.ExpensesCreateManyEmployeeInputEnvelope, { nullable: true }),
    __metadata("design:type", expenses_create_many_employee_input_envelope_input_1.ExpensesCreateManyEmployeeInputEnvelope)
], ExpensesUpdateManyWithoutEmployeeInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [expenses_where_unique_input_1.ExpensesWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ExpensesUpdateManyWithoutEmployeeInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [expenses_where_unique_input_1.ExpensesWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ExpensesUpdateManyWithoutEmployeeInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [expenses_where_unique_input_1.ExpensesWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ExpensesUpdateManyWithoutEmployeeInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [expenses_where_unique_input_1.ExpensesWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], ExpensesUpdateManyWithoutEmployeeInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [expenses_update_with_where_unique_without_employee_input_1.ExpensesUpdateWithWhereUniqueWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], ExpensesUpdateManyWithoutEmployeeInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [expenses_update_many_with_where_without_employee_input_1.ExpensesUpdateManyWithWhereWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], ExpensesUpdateManyWithoutEmployeeInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [expenses_scalar_where_input_1.ExpensesScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], ExpensesUpdateManyWithoutEmployeeInput.prototype, "deleteMany", void 0);
ExpensesUpdateManyWithoutEmployeeInput = __decorate([
    (0, graphql_2.InputType)()
], ExpensesUpdateManyWithoutEmployeeInput);
exports.ExpensesUpdateManyWithoutEmployeeInput = ExpensesUpdateManyWithoutEmployeeInput;
//# sourceMappingURL=expenses-update-many-without-employee.input.js.map