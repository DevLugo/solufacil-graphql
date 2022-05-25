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
exports.EmployeeUpdateOneWithoutPhonesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const employee_create_without_phones_input_1 = require("./employee-create-without-phones.input");
const employee_create_or_connect_without_phones_input_1 = require("./employee-create-or-connect-without-phones.input");
const employee_upsert_without_phones_input_1 = require("./employee-upsert-without-phones.input");
const employee_where_unique_input_1 = require("./employee-where-unique.input");
const employee_update_without_phones_input_1 = require("./employee-update-without-phones.input");
let EmployeeUpdateOneWithoutPhonesInput = class EmployeeUpdateOneWithoutPhonesInput {
};
__decorate([
    (0, graphql_1.Field)(() => employee_create_without_phones_input_1.EmployeeCreateWithoutPhonesInput, { nullable: true }),
    __metadata("design:type", employee_create_without_phones_input_1.EmployeeCreateWithoutPhonesInput)
], EmployeeUpdateOneWithoutPhonesInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_create_or_connect_without_phones_input_1.EmployeeCreateOrConnectWithoutPhonesInput, { nullable: true }),
    __metadata("design:type", employee_create_or_connect_without_phones_input_1.EmployeeCreateOrConnectWithoutPhonesInput)
], EmployeeUpdateOneWithoutPhonesInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_upsert_without_phones_input_1.EmployeeUpsertWithoutPhonesInput, { nullable: true }),
    __metadata("design:type", employee_upsert_without_phones_input_1.EmployeeUpsertWithoutPhonesInput)
], EmployeeUpdateOneWithoutPhonesInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], EmployeeUpdateOneWithoutPhonesInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], EmployeeUpdateOneWithoutPhonesInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_where_unique_input_1.EmployeeWhereUniqueInput, { nullable: true }),
    __metadata("design:type", employee_where_unique_input_1.EmployeeWhereUniqueInput)
], EmployeeUpdateOneWithoutPhonesInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_update_without_phones_input_1.EmployeeUpdateWithoutPhonesInput, { nullable: true }),
    __metadata("design:type", employee_update_without_phones_input_1.EmployeeUpdateWithoutPhonesInput)
], EmployeeUpdateOneWithoutPhonesInput.prototype, "update", void 0);
EmployeeUpdateOneWithoutPhonesInput = __decorate([
    (0, graphql_2.InputType)()
], EmployeeUpdateOneWithoutPhonesInput);
exports.EmployeeUpdateOneWithoutPhonesInput = EmployeeUpdateOneWithoutPhonesInput;
//# sourceMappingURL=employee-update-one-without-phones.input.js.map