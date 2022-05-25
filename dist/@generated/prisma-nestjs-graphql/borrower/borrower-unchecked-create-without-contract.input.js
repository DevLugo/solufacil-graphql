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
exports.BorrowerUncheckedCreateWithoutContractInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const Scalars = require("graphql-scalars");
const phone_unchecked_create_nested_many_without_borrower_input_1 = require("../phone/phone-unchecked-create-nested-many-without-borrower.input");
const document_unchecked_create_nested_many_without_borrower_input_1 = require("../document/document-unchecked-create-nested-many-without-borrower.input");
const graphql_3 = require("@nestjs/graphql");
const local_unchecked_create_nested_many_without_borrower_input_1 = require("../local/local-unchecked-create-nested-many-without-borrower.input");
let BorrowerUncheckedCreateWithoutContractInput = class BorrowerUncheckedCreateWithoutContractInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], BorrowerUncheckedCreateWithoutContractInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], BorrowerUncheckedCreateWithoutContractInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], BorrowerUncheckedCreateWithoutContractInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => Scalars.GraphQLEmailAddress, { nullable: true }),
    __metadata("design:type", String)
], BorrowerUncheckedCreateWithoutContractInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_unchecked_create_nested_many_without_borrower_input_1.PhoneUncheckedCreateNestedManyWithoutBorrowerInput, { nullable: true }),
    __metadata("design:type", phone_unchecked_create_nested_many_without_borrower_input_1.PhoneUncheckedCreateNestedManyWithoutBorrowerInput)
], BorrowerUncheckedCreateWithoutContractInput.prototype, "phones", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_unchecked_create_nested_many_without_borrower_input_1.DocumentUncheckedCreateNestedManyWithoutBorrowerInput, { nullable: true }),
    __metadata("design:type", document_unchecked_create_nested_many_without_borrower_input_1.DocumentUncheckedCreateNestedManyWithoutBorrowerInput)
], BorrowerUncheckedCreateWithoutContractInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], BorrowerUncheckedCreateWithoutContractInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], BorrowerUncheckedCreateWithoutContractInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => local_unchecked_create_nested_many_without_borrower_input_1.LocalUncheckedCreateNestedManyWithoutBorrowerInput, { nullable: true }),
    __metadata("design:type", local_unchecked_create_nested_many_without_borrower_input_1.LocalUncheckedCreateNestedManyWithoutBorrowerInput)
], BorrowerUncheckedCreateWithoutContractInput.prototype, "Local", void 0);
BorrowerUncheckedCreateWithoutContractInput = __decorate([
    (0, graphql_2.InputType)()
], BorrowerUncheckedCreateWithoutContractInput);
exports.BorrowerUncheckedCreateWithoutContractInput = BorrowerUncheckedCreateWithoutContractInput;
//# sourceMappingURL=borrower-unchecked-create-without-contract.input.js.map