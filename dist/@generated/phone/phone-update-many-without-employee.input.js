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
exports.PhoneUpdateManyWithoutEmployeeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const phone_create_without_employee_input_1 = require("./phone-create-without-employee.input");
const phone_create_or_connect_without_employee_input_1 = require("./phone-create-or-connect-without-employee.input");
const phone_upsert_with_where_unique_without_employee_input_1 = require("./phone-upsert-with-where-unique-without-employee.input");
const phone_create_many_employee_input_envelope_input_1 = require("./phone-create-many-employee-input-envelope.input");
const phone_where_unique_input_1 = require("./phone-where-unique.input");
const phone_update_with_where_unique_without_employee_input_1 = require("./phone-update-with-where-unique-without-employee.input");
const phone_update_many_with_where_without_employee_input_1 = require("./phone-update-many-with-where-without-employee.input");
const phone_scalar_where_input_1 = require("./phone-scalar-where.input");
let PhoneUpdateManyWithoutEmployeeInput = class PhoneUpdateManyWithoutEmployeeInput {
};
__decorate([
    (0, graphql_1.Field)(() => [phone_create_without_employee_input_1.PhoneCreateWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUpdateManyWithoutEmployeeInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_create_or_connect_without_employee_input_1.PhoneCreateOrConnectWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUpdateManyWithoutEmployeeInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_upsert_with_where_unique_without_employee_input_1.PhoneUpsertWithWhereUniqueWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUpdateManyWithoutEmployeeInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_create_many_employee_input_envelope_input_1.PhoneCreateManyEmployeeInputEnvelope, { nullable: true }),
    __metadata("design:type", phone_create_many_employee_input_envelope_input_1.PhoneCreateManyEmployeeInputEnvelope)
], PhoneUpdateManyWithoutEmployeeInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_where_unique_input_1.PhoneWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUpdateManyWithoutEmployeeInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_where_unique_input_1.PhoneWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUpdateManyWithoutEmployeeInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_where_unique_input_1.PhoneWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUpdateManyWithoutEmployeeInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_where_unique_input_1.PhoneWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUpdateManyWithoutEmployeeInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_update_with_where_unique_without_employee_input_1.PhoneUpdateWithWhereUniqueWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUpdateManyWithoutEmployeeInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_update_many_with_where_without_employee_input_1.PhoneUpdateManyWithWhereWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUpdateManyWithoutEmployeeInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_scalar_where_input_1.PhoneScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUpdateManyWithoutEmployeeInput.prototype, "deleteMany", void 0);
PhoneUpdateManyWithoutEmployeeInput = __decorate([
    (0, graphql_2.InputType)()
], PhoneUpdateManyWithoutEmployeeInput);
exports.PhoneUpdateManyWithoutEmployeeInput = PhoneUpdateManyWithoutEmployeeInput;
//# sourceMappingURL=phone-update-many-without-employee.input.js.map