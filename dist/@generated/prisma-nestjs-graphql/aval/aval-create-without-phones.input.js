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
exports.AvalCreateWithoutPhonesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const Scalars = require("graphql-scalars");
const graphql_3 = require("@nestjs/graphql");
const document_create_nested_many_without_aval_input_1 = require("../document/document-create-nested-many-without-aval.input");
let AvalCreateWithoutPhonesInput = class AvalCreateWithoutPhonesInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], AvalCreateWithoutPhonesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Scalars.GraphQLEmailAddress, { nullable: false }),
    __metadata("design:type", String)
], AvalCreateWithoutPhonesInput.prototype, "email", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", String)
], AvalCreateWithoutPhonesInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], AvalCreateWithoutPhonesInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], AvalCreateWithoutPhonesInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_create_nested_many_without_aval_input_1.DocumentCreateNestedManyWithoutAvalInput, { nullable: true }),
    __metadata("design:type", document_create_nested_many_without_aval_input_1.DocumentCreateNestedManyWithoutAvalInput)
], AvalCreateWithoutPhonesInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], AvalCreateWithoutPhonesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], AvalCreateWithoutPhonesInput.prototype, "updatedAt", void 0);
AvalCreateWithoutPhonesInput = __decorate([
    (0, graphql_2.InputType)()
], AvalCreateWithoutPhonesInput);
exports.AvalCreateWithoutPhonesInput = AvalCreateWithoutPhonesInput;
//# sourceMappingURL=aval-create-without-phones.input.js.map