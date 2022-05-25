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
exports.EmployeeUpsertWithoutDocumentsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const employee_update_without_documents_input_1 = require("./employee-update-without-documents.input");
const employee_create_without_documents_input_1 = require("./employee-create-without-documents.input");
let EmployeeUpsertWithoutDocumentsInput = class EmployeeUpsertWithoutDocumentsInput {
};
__decorate([
    (0, graphql_1.Field)(() => employee_update_without_documents_input_1.EmployeeUpdateWithoutDocumentsInput, { nullable: false }),
    __metadata("design:type", employee_update_without_documents_input_1.EmployeeUpdateWithoutDocumentsInput)
], EmployeeUpsertWithoutDocumentsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_create_without_documents_input_1.EmployeeCreateWithoutDocumentsInput, { nullable: false }),
    __metadata("design:type", employee_create_without_documents_input_1.EmployeeCreateWithoutDocumentsInput)
], EmployeeUpsertWithoutDocumentsInput.prototype, "create", void 0);
EmployeeUpsertWithoutDocumentsInput = __decorate([
    (0, graphql_2.InputType)()
], EmployeeUpsertWithoutDocumentsInput);
exports.EmployeeUpsertWithoutDocumentsInput = EmployeeUpsertWithoutDocumentsInput;
//# sourceMappingURL=employee-upsert-without-documents.input.js.map