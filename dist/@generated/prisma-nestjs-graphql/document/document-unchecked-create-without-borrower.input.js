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
exports.DocumentUncheckedCreateWithoutBorrowerInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const document_type_enum_1 = require("../prisma/document-type.enum");
let DocumentUncheckedCreateWithoutBorrowerInput = class DocumentUncheckedCreateWithoutBorrowerInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], DocumentUncheckedCreateWithoutBorrowerInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_type_enum_1.DocumentType, { nullable: false }),
    __metadata("design:type", Object)
], DocumentUncheckedCreateWithoutBorrowerInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], DocumentUncheckedCreateWithoutBorrowerInput.prototype, "avalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], DocumentUncheckedCreateWithoutBorrowerInput.prototype, "contractId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], DocumentUncheckedCreateWithoutBorrowerInput.prototype, "employeeId", void 0);
DocumentUncheckedCreateWithoutBorrowerInput = __decorate([
    (0, graphql_2.InputType)()
], DocumentUncheckedCreateWithoutBorrowerInput);
exports.DocumentUncheckedCreateWithoutBorrowerInput = DocumentUncheckedCreateWithoutBorrowerInput;
//# sourceMappingURL=document-unchecked-create-without-borrower.input.js.map