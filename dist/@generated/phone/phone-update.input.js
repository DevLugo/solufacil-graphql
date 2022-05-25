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
exports.PhoneUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_field_update_operations_input_1 = require("../prisma/string-field-update-operations.input");
const borrower_update_one_without_phones_input_1 = require("../borrower/borrower-update-one-without-phones.input");
const employee_update_one_without_phones_input_1 = require("../employee/employee-update-one-without-phones.input");
const graphql_3 = require("@nestjs/graphql");
const date_time_field_update_operations_input_1 = require("../prisma/date-time-field-update-operations.input");
const aval_update_one_without_phones_input_1 = require("../aval/aval-update-one-without-phones.input");
let PhoneUpdateInput = class PhoneUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], PhoneUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_field_update_operations_input_1.StringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", string_field_update_operations_input_1.StringFieldUpdateOperationsInput)
], PhoneUpdateInput.prototype, "number", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_update_one_without_phones_input_1.BorrowerUpdateOneWithoutPhonesInput, { nullable: true }),
    __metadata("design:type", borrower_update_one_without_phones_input_1.BorrowerUpdateOneWithoutPhonesInput)
], PhoneUpdateInput.prototype, "Borrower", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", employee_update_one_without_phones_input_1.EmployeeUpdateOneWithoutPhonesInput)
], PhoneUpdateInput.prototype, "Employee", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], PhoneUpdateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_field_update_operations_input_1.DateTimeFieldUpdateOperationsInput)
], PhoneUpdateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_update_one_without_phones_input_1.AvalUpdateOneWithoutPhonesInput, { nullable: true }),
    __metadata("design:type", aval_update_one_without_phones_input_1.AvalUpdateOneWithoutPhonesInput)
], PhoneUpdateInput.prototype, "aval", void 0);
PhoneUpdateInput = __decorate([
    (0, graphql_2.InputType)()
], PhoneUpdateInput);
exports.PhoneUpdateInput = PhoneUpdateInput;
//# sourceMappingURL=phone-update.input.js.map