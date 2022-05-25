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
exports.DocumentUpdateWithWhereUniqueWithoutEmployeeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const document_where_unique_input_1 = require("./document-where-unique.input");
const document_update_without_employee_input_1 = require("./document-update-without-employee.input");
let DocumentUpdateWithWhereUniqueWithoutEmployeeInput = class DocumentUpdateWithWhereUniqueWithoutEmployeeInput {
};
__decorate([
    (0, graphql_1.Field)(() => document_where_unique_input_1.DocumentWhereUniqueInput, { nullable: false }),
    __metadata("design:type", document_where_unique_input_1.DocumentWhereUniqueInput)
], DocumentUpdateWithWhereUniqueWithoutEmployeeInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_update_without_employee_input_1.DocumentUpdateWithoutEmployeeInput, { nullable: false }),
    __metadata("design:type", document_update_without_employee_input_1.DocumentUpdateWithoutEmployeeInput)
], DocumentUpdateWithWhereUniqueWithoutEmployeeInput.prototype, "data", void 0);
DocumentUpdateWithWhereUniqueWithoutEmployeeInput = __decorate([
    (0, graphql_2.InputType)()
], DocumentUpdateWithWhereUniqueWithoutEmployeeInput);
exports.DocumentUpdateWithWhereUniqueWithoutEmployeeInput = DocumentUpdateWithWhereUniqueWithoutEmployeeInput;
//# sourceMappingURL=document-update-with-where-unique-without-employee.input.js.map