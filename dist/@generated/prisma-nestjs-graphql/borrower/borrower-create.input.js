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
exports.BorrowerCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const Scalars = require("graphql-scalars");
const phone_create_nested_many_without_borrower_input_1 = require("../phone/phone-create-nested-many-without-borrower.input");
const document_create_nested_many_without_borrower_input_1 = require("../document/document-create-nested-many-without-borrower.input");
const contract_create_nested_many_without_borrower_input_1 = require("../contract/contract-create-nested-many-without-borrower.input");
const local_create_nested_many_without_borrower_input_1 = require("../local/local-create-nested-many-without-borrower.input");
let BorrowerCreateInput = class BorrowerCreateInput {
};
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", String)
], BorrowerCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], BorrowerCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], BorrowerCreateInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => Scalars.GraphQLEmailAddress, { nullable: true }),
    __metadata("design:type", String)
], BorrowerCreateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_create_nested_many_without_borrower_input_1.PhoneCreateNestedManyWithoutBorrowerInput, { nullable: true }),
    __metadata("design:type", phone_create_nested_many_without_borrower_input_1.PhoneCreateNestedManyWithoutBorrowerInput)
], BorrowerCreateInput.prototype, "phones", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_create_nested_many_without_borrower_input_1.DocumentCreateNestedManyWithoutBorrowerInput, { nullable: true }),
    __metadata("design:type", document_create_nested_many_without_borrower_input_1.DocumentCreateNestedManyWithoutBorrowerInput)
], BorrowerCreateInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], BorrowerCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], BorrowerCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_create_nested_many_without_borrower_input_1.ContractCreateNestedManyWithoutBorrowerInput, { nullable: true }),
    __metadata("design:type", contract_create_nested_many_without_borrower_input_1.ContractCreateNestedManyWithoutBorrowerInput)
], BorrowerCreateInput.prototype, "Contract", void 0);
__decorate([
    (0, graphql_1.Field)(() => local_create_nested_many_without_borrower_input_1.LocalCreateNestedManyWithoutBorrowerInput, { nullable: true }),
    __metadata("design:type", local_create_nested_many_without_borrower_input_1.LocalCreateNestedManyWithoutBorrowerInput)
], BorrowerCreateInput.prototype, "Local", void 0);
BorrowerCreateInput = __decorate([
    (0, graphql_2.InputType)()
], BorrowerCreateInput);
exports.BorrowerCreateInput = BorrowerCreateInput;
//# sourceMappingURL=borrower-create.input.js.map