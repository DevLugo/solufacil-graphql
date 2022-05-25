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
var AvalWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvalWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const phone_list_relation_filter_input_1 = require("../phone/phone-list-relation-filter.input");
const graphql_3 = require("@nestjs/graphql");
const document_list_relation_filter_input_1 = require("../document/document-list-relation-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let AvalWhereInput = AvalWhereInput_1 = class AvalWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [AvalWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], AvalWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AvalWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], AvalWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [AvalWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], AvalWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], AvalWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_list_relation_filter_input_1.PhoneListRelationFilter, { nullable: true }),
    __metadata("design:type", phone_list_relation_filter_input_1.PhoneListRelationFilter)
], AvalWhereInput.prototype, "phones", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], AvalWhereInput.prototype, "email", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", string_filter_input_1.StringFilter)
], AvalWhereInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], AvalWhereInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], AvalWhereInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_list_relation_filter_input_1.DocumentListRelationFilter, { nullable: true }),
    __metadata("design:type", document_list_relation_filter_input_1.DocumentListRelationFilter)
], AvalWhereInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], AvalWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], AvalWhereInput.prototype, "updatedAt", void 0);
AvalWhereInput = AvalWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], AvalWhereInput);
exports.AvalWhereInput = AvalWhereInput;
//# sourceMappingURL=aval-where.input.js.map