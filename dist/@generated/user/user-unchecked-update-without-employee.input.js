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
exports.UserUncheckedUpdateWithoutEmployeeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const graphql_3 = require("@nestjs/graphql");
const nullable_date_time_field_update_operations_input_1 = require("../prisma/nullable-date-time-field-update-operations.input");
const nullable_string_field_update_operations_input_1 = require("../prisma/nullable-string-field-update-operations.input");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
let UserUncheckedUpdateWithoutEmployeeInput = class UserUncheckedUpdateWithoutEmployeeInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutEmployeeInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutEmployeeInput.prototype, "email", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutEmployeeInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutEmployeeInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutEmployeeInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutEmployeeInput.prototype, "password", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", nullable_date_time_field_update_operations_input_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutEmployeeInput.prototype, "lastLogin", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutEmployeeInput.prototype, "profilePicture", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutEmployeeInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], UserUncheckedUpdateWithoutEmployeeInput.prototype, "updatedAt", void 0);
UserUncheckedUpdateWithoutEmployeeInput = __decorate([
    (0, graphql_2.InputType)()
], UserUncheckedUpdateWithoutEmployeeInput);
exports.UserUncheckedUpdateWithoutEmployeeInput = UserUncheckedUpdateWithoutEmployeeInput;
//# sourceMappingURL=user-unchecked-update-without-employee.input.js.map