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
exports.BorrowerCreateNestedOneWithoutDocumentsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const borrower_create_without_documents_input_1 = require("./borrower-create-without-documents.input");
const borrower_create_or_connect_without_documents_input_1 = require("./borrower-create-or-connect-without-documents.input");
const borrower_where_unique_input_1 = require("./borrower-where-unique.input");
let BorrowerCreateNestedOneWithoutDocumentsInput = class BorrowerCreateNestedOneWithoutDocumentsInput {
};
__decorate([
    (0, graphql_1.Field)(() => borrower_create_without_documents_input_1.BorrowerCreateWithoutDocumentsInput, { nullable: true }),
    __metadata("design:type", borrower_create_without_documents_input_1.BorrowerCreateWithoutDocumentsInput)
], BorrowerCreateNestedOneWithoutDocumentsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_create_or_connect_without_documents_input_1.BorrowerCreateOrConnectWithoutDocumentsInput, { nullable: true }),
    __metadata("design:type", borrower_create_or_connect_without_documents_input_1.BorrowerCreateOrConnectWithoutDocumentsInput)
], BorrowerCreateNestedOneWithoutDocumentsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_where_unique_input_1.BorrowerWhereUniqueInput, { nullable: true }),
    __metadata("design:type", borrower_where_unique_input_1.BorrowerWhereUniqueInput)
], BorrowerCreateNestedOneWithoutDocumentsInput.prototype, "connect", void 0);
BorrowerCreateNestedOneWithoutDocumentsInput = __decorate([
    (0, graphql_2.InputType)()
], BorrowerCreateNestedOneWithoutDocumentsInput);
exports.BorrowerCreateNestedOneWithoutDocumentsInput = BorrowerCreateNestedOneWithoutDocumentsInput;
//# sourceMappingURL=borrower-create-nested-one-without-documents.input.js.map