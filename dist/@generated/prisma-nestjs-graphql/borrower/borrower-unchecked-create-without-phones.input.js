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
exports.BorrowerUncheckedCreateWithoutPhonesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const Scalars = require("graphql-scalars");
const document_unchecked_create_nested_many_without_borrower_input_1 = require("../document/document-unchecked-create-nested-many-without-borrower.input");
const graphql_3 = require("@nestjs/graphql");
const contract_unchecked_create_nested_many_without_borrower_input_1 = require("../contract/contract-unchecked-create-nested-many-without-borrower.input");
const local_unchecked_create_nested_many_without_borrower_input_1 = require("../local/local-unchecked-create-nested-many-without-borrower.input");
let BorrowerUncheckedCreateWithoutPhonesInput = class BorrowerUncheckedCreateWithoutPhonesInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], BorrowerUncheckedCreateWithoutPhonesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], BorrowerUncheckedCreateWithoutPhonesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], BorrowerUncheckedCreateWithoutPhonesInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => Scalars.GraphQLEmailAddress, { nullable: true }),
    __metadata("design:type", String)
], BorrowerUncheckedCreateWithoutPhonesInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_unchecked_create_nested_many_without_borrower_input_1.DocumentUncheckedCreateNestedManyWithoutBorrowerInput, { nullable: true }),
    __metadata("design:type", document_unchecked_create_nested_many_without_borrower_input_1.DocumentUncheckedCreateNestedManyWithoutBorrowerInput)
], BorrowerUncheckedCreateWithoutPhonesInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], BorrowerUncheckedCreateWithoutPhonesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], BorrowerUncheckedCreateWithoutPhonesInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_unchecked_create_nested_many_without_borrower_input_1.ContractUncheckedCreateNestedManyWithoutBorrowerInput, { nullable: true }),
    __metadata("design:type", contract_unchecked_create_nested_many_without_borrower_input_1.ContractUncheckedCreateNestedManyWithoutBorrowerInput)
], BorrowerUncheckedCreateWithoutPhonesInput.prototype, "Contract", void 0);
__decorate([
    (0, graphql_1.Field)(() => local_unchecked_create_nested_many_without_borrower_input_1.LocalUncheckedCreateNestedManyWithoutBorrowerInput, { nullable: true }),
    __metadata("design:type", local_unchecked_create_nested_many_without_borrower_input_1.LocalUncheckedCreateNestedManyWithoutBorrowerInput)
], BorrowerUncheckedCreateWithoutPhonesInput.prototype, "Local", void 0);
BorrowerUncheckedCreateWithoutPhonesInput = __decorate([
    (0, graphql_2.InputType)()
], BorrowerUncheckedCreateWithoutPhonesInput);
exports.BorrowerUncheckedCreateWithoutPhonesInput = BorrowerUncheckedCreateWithoutPhonesInput;
//# sourceMappingURL=borrower-unchecked-create-without-phones.input.js.map