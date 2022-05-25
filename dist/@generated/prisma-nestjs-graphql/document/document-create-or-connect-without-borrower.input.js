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
exports.DocumentCreateOrConnectWithoutBorrowerInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const document_where_unique_input_1 = require("./document-where-unique.input");
const document_create_without_borrower_input_1 = require("./document-create-without-borrower.input");
let DocumentCreateOrConnectWithoutBorrowerInput = class DocumentCreateOrConnectWithoutBorrowerInput {
};
__decorate([
    (0, graphql_1.Field)(() => document_where_unique_input_1.DocumentWhereUniqueInput, { nullable: false }),
    __metadata("design:type", document_where_unique_input_1.DocumentWhereUniqueInput)
], DocumentCreateOrConnectWithoutBorrowerInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_create_without_borrower_input_1.DocumentCreateWithoutBorrowerInput, { nullable: false }),
    __metadata("design:type", document_create_without_borrower_input_1.DocumentCreateWithoutBorrowerInput)
], DocumentCreateOrConnectWithoutBorrowerInput.prototype, "create", void 0);
DocumentCreateOrConnectWithoutBorrowerInput = __decorate([
    (0, graphql_2.InputType)()
], DocumentCreateOrConnectWithoutBorrowerInput);
exports.DocumentCreateOrConnectWithoutBorrowerInput = DocumentCreateOrConnectWithoutBorrowerInput;
//# sourceMappingURL=document-create-or-connect-without-borrower.input.js.map