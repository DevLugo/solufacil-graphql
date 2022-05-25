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
exports.AvalUncheckedCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const phone_unchecked_create_nested_many_without_aval_input_1 = require("../phone/phone-unchecked-create-nested-many-without-aval.input");
const Scalars = require("graphql-scalars");
const graphql_3 = require("@nestjs/graphql");
const document_unchecked_create_nested_many_without_aval_input_1 = require("../document/document-unchecked-create-nested-many-without-aval.input");
let AvalUncheckedCreateInput = class AvalUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], AvalUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_unchecked_create_nested_many_without_aval_input_1.PhoneUncheckedCreateNestedManyWithoutAvalInput, { nullable: true }),
    __metadata("design:type", phone_unchecked_create_nested_many_without_aval_input_1.PhoneUncheckedCreateNestedManyWithoutAvalInput)
], AvalUncheckedCreateInput.prototype, "phones", void 0);
__decorate([
    (0, graphql_1.Field)(() => Scalars.GraphQLEmailAddress, { nullable: false }),
    __metadata("design:type", String)
], AvalUncheckedCreateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", String)
], AvalUncheckedCreateInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], AvalUncheckedCreateInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], AvalUncheckedCreateInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_unchecked_create_nested_many_without_aval_input_1.DocumentUncheckedCreateNestedManyWithoutAvalInput, { nullable: true }),
    __metadata("design:type", document_unchecked_create_nested_many_without_aval_input_1.DocumentUncheckedCreateNestedManyWithoutAvalInput)
], AvalUncheckedCreateInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], AvalUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], AvalUncheckedCreateInput.prototype, "updatedAt", void 0);
AvalUncheckedCreateInput = __decorate([
    (0, graphql_2.InputType)()
], AvalUncheckedCreateInput);
exports.AvalUncheckedCreateInput = AvalUncheckedCreateInput;
//# sourceMappingURL=aval-unchecked-create.input.js.map