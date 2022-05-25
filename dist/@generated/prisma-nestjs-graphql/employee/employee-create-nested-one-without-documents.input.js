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
exports.EmployeeCreateNestedOneWithoutDocumentsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const employee_create_without_documents_input_1 = require("./employee-create-without-documents.input");
const employee_create_or_connect_without_documents_input_1 = require("./employee-create-or-connect-without-documents.input");
const employee_where_unique_input_1 = require("./employee-where-unique.input");
let EmployeeCreateNestedOneWithoutDocumentsInput = class EmployeeCreateNestedOneWithoutDocumentsInput {
};
__decorate([
    (0, graphql_1.Field)(() => employee_create_without_documents_input_1.EmployeeCreateWithoutDocumentsInput, { nullable: true }),
    __metadata("design:type", employee_create_without_documents_input_1.EmployeeCreateWithoutDocumentsInput)
], EmployeeCreateNestedOneWithoutDocumentsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_create_or_connect_without_documents_input_1.EmployeeCreateOrConnectWithoutDocumentsInput, { nullable: true }),
    __metadata("design:type", employee_create_or_connect_without_documents_input_1.EmployeeCreateOrConnectWithoutDocumentsInput)
], EmployeeCreateNestedOneWithoutDocumentsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_where_unique_input_1.EmployeeWhereUniqueInput, { nullable: true }),
    __metadata("design:type", employee_where_unique_input_1.EmployeeWhereUniqueInput)
], EmployeeCreateNestedOneWithoutDocumentsInput.prototype, "connect", void 0);
EmployeeCreateNestedOneWithoutDocumentsInput = __decorate([
    (0, graphql_2.InputType)()
], EmployeeCreateNestedOneWithoutDocumentsInput);
exports.EmployeeCreateNestedOneWithoutDocumentsInput = EmployeeCreateNestedOneWithoutDocumentsInput;
//# sourceMappingURL=employee-create-nested-one-without-documents.input.js.map