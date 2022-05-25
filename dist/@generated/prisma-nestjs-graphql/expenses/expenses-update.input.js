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
exports.ExpensesUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const decimal_field_update_operations_input_1 = require("../prisma/decimal-field-update-operations.input");
const enum_payment_state_field_update_operations_input_1 = require("../prisma/enum-payment-state-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const employee_update_one_required_without_expenses_input_1 = require("../employee/employee-update-one-required-without-expenses.input");
const graphql_3 = require("@nestjs/graphql");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
let ExpensesUpdateInput = class ExpensesUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], ExpensesUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", decimal_field_update_operations_input_1.DecimalFieldUpdateOperationsInput)
], ExpensesUpdateInput.prototype, "amountToPay", void 0);
__decorate([
    (0, graphql_1.Field)(() => enum_payment_state_field_update_operations_input_1.EnumPaymentStateFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", enum_payment_state_field_update_operations_input_1.EnumPaymentStateFieldUpdateOperationsInput)
], ExpensesUpdateInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ExpensesUpdateInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ExpensesUpdateInput.prototype, "payedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_update_one_required_without_expenses_input_1.EmployeeUpdateOneRequiredWithoutExpensesInput, { nullable: true }),
    __metadata("design:type", employee_update_one_required_without_expenses_input_1.EmployeeUpdateOneRequiredWithoutExpensesInput)
], ExpensesUpdateInput.prototype, "employee", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ExpensesUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], ExpensesUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], ExpensesUpdateInput.prototype, "userId", void 0);
ExpensesUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], ExpensesUpdateInput);
exports.ExpensesUpdateInput = ExpensesUpdateInput;
//# sourceMappingURL=expenses-update.input.js.map