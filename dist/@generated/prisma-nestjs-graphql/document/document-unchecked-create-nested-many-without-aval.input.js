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
exports.DocumentUncheckedCreateNestedManyWithoutAvalInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const document_create_without_aval_input_1 = require("./document-create-without-aval.input");
const document_create_or_connect_without_aval_input_1 = require("./document-create-or-connect-without-aval.input");
const document_create_many_aval_input_envelope_input_1 = require("./document-create-many-aval-input-envelope.input");
const document_where_unique_input_1 = require("./document-where-unique.input");
let DocumentUncheckedCreateNestedManyWithoutAvalInput = class DocumentUncheckedCreateNestedManyWithoutAvalInput {
};
__decorate([
    (0, graphql_1.Field)(() => [document_create_without_aval_input_1.DocumentCreateWithoutAvalInput], { nullable: true }),
    __metadata("design:type", Array)
], DocumentUncheckedCreateNestedManyWithoutAvalInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_create_or_connect_without_aval_input_1.DocumentCreateOrConnectWithoutAvalInput], { nullable: true }),
    __metadata("design:type", Array)
], DocumentUncheckedCreateNestedManyWithoutAvalInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_create_many_aval_input_envelope_input_1.DocumentCreateManyAvalInputEnvelope, { nullable: true }),
    __metadata("design:type", document_create_many_aval_input_envelope_input_1.DocumentCreateManyAvalInputEnvelope)
], DocumentUncheckedCreateNestedManyWithoutAvalInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_where_unique_input_1.DocumentWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], DocumentUncheckedCreateNestedManyWithoutAvalInput.prototype, "connect", void 0);
DocumentUncheckedCreateNestedManyWithoutAvalInput = __decorate([
    (0, graphql_2.InputType)()
], DocumentUncheckedCreateNestedManyWithoutAvalInput);
exports.DocumentUncheckedCreateNestedManyWithoutAvalInput = DocumentUncheckedCreateNestedManyWithoutAvalInput;
//# sourceMappingURL=document-unchecked-create-nested-many-without-aval.input.js.map