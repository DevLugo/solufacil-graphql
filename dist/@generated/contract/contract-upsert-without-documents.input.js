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
exports.ContractUpsertWithoutDocumentsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const contract_update_without_documents_input_1 = require("./contract-update-without-documents.input");
const contract_create_without_documents_input_1 = require("./contract-create-without-documents.input");
let ContractUpsertWithoutDocumentsInput = class ContractUpsertWithoutDocumentsInput {
};
__decorate([
    (0, graphql_1.Field)(() => contract_update_without_documents_input_1.ContractUpdateWithoutDocumentsInput, { nullable: false }),
    __metadata("design:type", contract_update_without_documents_input_1.ContractUpdateWithoutDocumentsInput)
], ContractUpsertWithoutDocumentsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_create_without_documents_input_1.ContractCreateWithoutDocumentsInput, { nullable: false }),
    __metadata("design:type", contract_create_without_documents_input_1.ContractCreateWithoutDocumentsInput)
], ContractUpsertWithoutDocumentsInput.prototype, "create", void 0);
ContractUpsertWithoutDocumentsInput = __decorate([
    (0, graphql_2.InputType)()
], ContractUpsertWithoutDocumentsInput);
exports.ContractUpsertWithoutDocumentsInput = ContractUpsertWithoutDocumentsInput;
//# sourceMappingURL=contract-upsert-without-documents.input.js.map