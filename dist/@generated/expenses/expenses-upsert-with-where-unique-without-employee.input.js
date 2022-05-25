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
exports.ExpensesUpsertWithWhereUniqueWithoutEmployeeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const expenses_where_unique_input_1 = require("./expenses-where-unique.input");
const expenses_update_without_employee_input_1 = require("./expenses-update-without-employee.input");
const expenses_create_without_employee_input_1 = require("./expenses-create-without-employee.input");
let ExpensesUpsertWithWhereUniqueWithoutEmployeeInput = class ExpensesUpsertWithWhereUniqueWithoutEmployeeInput {
};
__decorate([
    (0, graphql_1.Field)(() => expenses_where_unique_input_1.ExpensesWhereUniqueInput, { nullable: false }),
    __metadata("design:type", expenses_where_unique_input_1.ExpensesWhereUniqueInput)
], ExpensesUpsertWithWhereUniqueWithoutEmployeeInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_update_without_employee_input_1.ExpensesUpdateWithoutEmployeeInput, { nullable: false }),
    __metadata("design:type", expenses_update_without_employee_input_1.ExpensesUpdateWithoutEmployeeInput)
], ExpensesUpsertWithWhereUniqueWithoutEmployeeInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_create_without_employee_input_1.ExpensesCreateWithoutEmployeeInput, { nullable: false }),
    __metadata("design:type", expenses_create_without_employee_input_1.ExpensesCreateWithoutEmployeeInput)
], ExpensesUpsertWithWhereUniqueWithoutEmployeeInput.prototype, "create", void 0);
ExpensesUpsertWithWhereUniqueWithoutEmployeeInput = __decorate([
    (0, graphql_2.InputType)()
], ExpensesUpsertWithWhereUniqueWithoutEmployeeInput);
exports.ExpensesUpsertWithWhereUniqueWithoutEmployeeInput = ExpensesUpsertWithWhereUniqueWithoutEmployeeInput;
//# sourceMappingURL=expenses-upsert-with-where-unique-without-employee.input.js.map