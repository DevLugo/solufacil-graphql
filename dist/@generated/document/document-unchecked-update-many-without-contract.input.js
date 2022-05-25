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
exports.DocumentUncheckedUpdateManyWithoutContractInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const document_create_without_contract_input_1 = require("./document-create-without-contract.input");
const document_create_or_connect_without_contract_input_1 = require("./document-create-or-connect-without-contract.input");
const document_upsert_with_where_unique_without_contract_input_1 = require("./document-upsert-with-where-unique-without-contract.input");
const document_create_many_contract_input_envelope_input_1 = require("./document-create-many-contract-input-envelope.input");
const document_where_unique_input_1 = require("./document-where-unique.input");
const document_update_with_where_unique_without_contract_input_1 = require("./document-update-with-where-unique-without-contract.input");
const document_update_many_with_where_without_contract_input_1 = require("./document-update-many-with-where-without-contract.input");
const document_scalar_where_input_1 = require("./document-scalar-where.input");
let DocumentUncheckedUpdateManyWithoutContractInput = class DocumentUncheckedUpdateManyWithoutContractInput {
};
__decorate([
    (0, graphql_1.Field)(() => [document_create_without_contract_input_1.DocumentCreateWithoutContractInput], { nullable: true }),
    __metadata("design:type", Array)
], DocumentUncheckedUpdateManyWithoutContractInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_create_or_connect_without_contract_input_1.DocumentCreateOrConnectWithoutContractInput], { nullable: true }),
    __metadata("design:type", Array)
], DocumentUncheckedUpdateManyWithoutContractInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_upsert_with_where_unique_without_contract_input_1.DocumentUpsertWithWhereUniqueWithoutContractInput], { nullable: true }),
    __metadata("design:type", Array)
], DocumentUncheckedUpdateManyWithoutContractInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_create_many_contract_input_envelope_input_1.DocumentCreateManyContractInputEnvelope, { nullable: true }),
    __metadata("design:type", document_create_many_contract_input_envelope_input_1.DocumentCreateManyContractInputEnvelope)
], DocumentUncheckedUpdateManyWithoutContractInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_where_unique_input_1.DocumentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], DocumentUncheckedUpdateManyWithoutContractInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_where_unique_input_1.DocumentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], DocumentUncheckedUpdateManyWithoutContractInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_where_unique_input_1.DocumentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], DocumentUncheckedUpdateManyWithoutContractInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_where_unique_input_1.DocumentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], DocumentUncheckedUpdateManyWithoutContractInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_update_with_where_unique_without_contract_input_1.DocumentUpdateWithWhereUniqueWithoutContractInput], { nullable: true }),
    __metadata("design:type", Array)
], DocumentUncheckedUpdateManyWithoutContractInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_update_many_with_where_without_contract_input_1.DocumentUpdateManyWithWhereWithoutContractInput], { nullable: true }),
    __metadata("design:type", Array)
], DocumentUncheckedUpdateManyWithoutContractInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_scalar_where_input_1.DocumentScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], DocumentUncheckedUpdateManyWithoutContractInput.prototype, "deleteMany", void 0);
DocumentUncheckedUpdateManyWithoutContractInput = __decorate([
    (0, graphql_2.InputType)()
], DocumentUncheckedUpdateManyWithoutContractInput);
exports.DocumentUncheckedUpdateManyWithoutContractInput = DocumentUncheckedUpdateManyWithoutContractInput;
//# sourceMappingURL=document-unchecked-update-many-without-contract.input.js.map