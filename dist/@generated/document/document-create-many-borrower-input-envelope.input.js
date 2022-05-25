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
exports.DocumentCreateManyBorrowerInputEnvelope = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const document_create_many_borrower_input_1 = require("./document-create-many-borrower.input");
let DocumentCreateManyBorrowerInputEnvelope = class DocumentCreateManyBorrowerInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [document_create_many_borrower_input_1.DocumentCreateManyBorrowerInput], { nullable: false }),
    __metadata("design:type", Array)
], DocumentCreateManyBorrowerInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], DocumentCreateManyBorrowerInputEnvelope.prototype, "skipDuplicates", void 0);
DocumentCreateManyBorrowerInputEnvelope = __decorate([
    (0, graphql_2.InputType)()
], DocumentCreateManyBorrowerInputEnvelope);
exports.DocumentCreateManyBorrowerInputEnvelope = DocumentCreateManyBorrowerInputEnvelope;
//# sourceMappingURL=document-create-many-borrower-input-envelope.input.js.map