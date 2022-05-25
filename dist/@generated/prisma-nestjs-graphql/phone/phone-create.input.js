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
exports.PhoneCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const borrower_create_nested_one_without_phones_input_1 = require("../borrower/borrower-create-nested-one-without-phones.input");
const employee_create_nested_one_without_phones_input_1 = require("../employee/employee-create-nested-one-without-phones.input");
const aval_create_nested_one_without_phones_input_1 = require("../aval/aval-create-nested-one-without-phones.input");
let PhoneCreateInput = class PhoneCreateInput {
};
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", String)
], PhoneCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], PhoneCreateInput.prototype, "number", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_create_nested_one_without_phones_input_1.BorrowerCreateNestedOneWithoutPhonesInput, { nullable: true }),
    __metadata("design:type", borrower_create_nested_one_without_phones_input_1.BorrowerCreateNestedOneWithoutPhonesInput)
], PhoneCreateInput.prototype, "Borrower", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", employee_create_nested_one_without_phones_input_1.EmployeeCreateNestedOneWithoutPhonesInput)
], PhoneCreateInput.prototype, "Employee", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PhoneCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PhoneCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_create_nested_one_without_phones_input_1.AvalCreateNestedOneWithoutPhonesInput, { nullable: true }),
    __metadata("design:type", aval_create_nested_one_without_phones_input_1.AvalCreateNestedOneWithoutPhonesInput)
], PhoneCreateInput.prototype, "aval", void 0);
PhoneCreateInput = __decorate([
    (0, graphql_2.InputType)()
], PhoneCreateInput);
exports.PhoneCreateInput = PhoneCreateInput;
//# sourceMappingURL=phone-create.input.js.map