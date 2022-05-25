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
var BorrowerWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowerWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const string_nullable_filter_input_1 = require("../prisma/string-nullable-filter.input");
const phone_list_relation_filter_input_1 = require("../phone/phone-list-relation-filter.input");
const document_list_relation_filter_input_1 = require("../document/document-list-relation-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const graphql_3 = require("@nestjs/graphql");
const contract_list_relation_filter_input_1 = require("../contract/contract-list-relation-filter.input");
const local_list_relation_filter_input_1 = require("../local/local-list-relation-filter.input");
let BorrowerWhereInput = BorrowerWhereInput_1 = class BorrowerWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [BorrowerWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], BorrowerWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [BorrowerWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], BorrowerWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [BorrowerWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], BorrowerWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], BorrowerWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], BorrowerWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], BorrowerWhereInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_nullable_filter_input_1.StringNullableFilter, { nullable: true }),
    __metadata("design:type", string_nullable_filter_input_1.StringNullableFilter)
], BorrowerWhereInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_list_relation_filter_input_1.PhoneListRelationFilter, { nullable: true }),
    __metadata("design:type", phone_list_relation_filter_input_1.PhoneListRelationFilter)
], BorrowerWhereInput.prototype, "phones", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_list_relation_filter_input_1.DocumentListRelationFilter, { nullable: true }),
    __metadata("design:type", document_list_relation_filter_input_1.DocumentListRelationFilter)
], BorrowerWhereInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], BorrowerWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], BorrowerWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_list_relation_filter_input_1.ContractListRelationFilter, { nullable: true }),
    __metadata("design:type", contract_list_relation_filter_input_1.ContractListRelationFilter)
], BorrowerWhereInput.prototype, "Contract", void 0);
__decorate([
    (0, graphql_1.Field)(() => local_list_relation_filter_input_1.LocalListRelationFilter, { nullable: true }),
    __metadata("design:type", local_list_relation_filter_input_1.LocalListRelationFilter)
], BorrowerWhereInput.prototype, "Local", void 0);
BorrowerWhereInput = BorrowerWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], BorrowerWhereInput);
exports.BorrowerWhereInput = BorrowerWhereInput;
//# sourceMappingURL=borrower-where.input.js.map