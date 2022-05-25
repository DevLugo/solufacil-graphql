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
exports.BorrowerCreateWithoutPhonesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const Scalars = require("graphql-scalars");
const document_create_nested_many_without_borrower_input_1 = require("../document/document-create-nested-many-without-borrower.input");
const contract_create_nested_many_without_borrower_input_1 = require("../contract/contract-create-nested-many-without-borrower.input");
const local_create_nested_many_without_borrower_input_1 = require("../local/local-create-nested-many-without-borrower.input");
let BorrowerCreateWithoutPhonesInput = class BorrowerCreateWithoutPhonesInput {
};
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", String)
], BorrowerCreateWithoutPhonesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], BorrowerCreateWithoutPhonesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], BorrowerCreateWithoutPhonesInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => Scalars.GraphQLEmailAddress, { nullable: true }),
    __metadata("design:type", String)
], BorrowerCreateWithoutPhonesInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_create_nested_many_without_borrower_input_1.DocumentCreateNestedManyWithoutBorrowerInput, { nullable: true }),
    __metadata("design:type", document_create_nested_many_without_borrower_input_1.DocumentCreateNestedManyWithoutBorrowerInput)
], BorrowerCreateWithoutPhonesInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], BorrowerCreateWithoutPhonesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], BorrowerCreateWithoutPhonesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_create_nested_many_without_borrower_input_1.ContractCreateNestedManyWithoutBorrowerInput, { nullable: true }),
    __metadata("design:type", contract_create_nested_many_without_borrower_input_1.ContractCreateNestedManyWithoutBorrowerInput)
], BorrowerCreateWithoutPhonesInput.prototype, "Contract", void 0);
__decorate([
    (0, graphql_1.Field)(() => local_create_nested_many_without_borrower_input_1.LocalCreateNestedManyWithoutBorrowerInput, { nullable: true }),
    __metadata("design:type", local_create_nested_many_without_borrower_input_1.LocalCreateNestedManyWithoutBorrowerInput)
], BorrowerCreateWithoutPhonesInput.prototype, "Local", void 0);
BorrowerCreateWithoutPhonesInput = __decorate([
    (0, graphql_2.InputType)()
], BorrowerCreateWithoutPhonesInput);
exports.BorrowerCreateWithoutPhonesInput = BorrowerCreateWithoutPhonesInput;
//# sourceMappingURL=borrower-create-without-phones.input.js.map