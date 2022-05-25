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
exports.DocumentUncheckedCreateNestedManyWithoutEmployeeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const document_create_without_employee_input_1 = require("./document-create-without-employee.input");
const document_create_or_connect_without_employee_input_1 = require("./document-create-or-connect-without-employee.input");
const document_create_many_employee_input_envelope_input_1 = require("./document-create-many-employee-input-envelope.input");
const document_where_unique_input_1 = require("./document-where-unique.input");
let DocumentUncheckedCreateNestedManyWithoutEmployeeInput = class DocumentUncheckedCreateNestedManyWithoutEmployeeInput {
};
__decorate([
    (0, graphql_1.Field)(() => [document_create_without_employee_input_1.DocumentCreateWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], DocumentUncheckedCreateNestedManyWithoutEmployeeInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_create_or_connect_without_employee_input_1.DocumentCreateOrConnectWithoutEmployeeInput], { nullable: true }),
    __metadata("design:type", Array)
], DocumentUncheckedCreateNestedManyWithoutEmployeeInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_create_many_employee_input_envelope_input_1.DocumentCreateManyEmployeeInputEnvelope, { nullable: true }),
    __metadata("design:type", document_create_many_employee_input_envelope_input_1.DocumentCreateManyEmployeeInputEnvelope)
], DocumentUncheckedCreateNestedManyWithoutEmployeeInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_where_unique_input_1.DocumentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], DocumentUncheckedCreateNestedManyWithoutEmployeeInput.prototype, "connect", void 0);
DocumentUncheckedCreateNestedManyWithoutEmployeeInput = __decorate([
    (0, graphql_2.InputType)()
], DocumentUncheckedCreateNestedManyWithoutEmployeeInput);
exports.DocumentUncheckedCreateNestedManyWithoutEmployeeInput = DocumentUncheckedCreateNestedManyWithoutEmployeeInput;
//# sourceMappingURL=document-unchecked-create-nested-many-without-employee.input.js.map