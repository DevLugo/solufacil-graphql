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
var LocalWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const graphql_3 = require("@nestjs/graphql");
const borrower_relation_filter_input_1 = require("../borrower/borrower-relation-filter.input");
let LocalWhereInput = LocalWhereInput_1 = class LocalWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [LocalWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LocalWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LocalWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LocalWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LocalWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LocalWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LocalWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LocalWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LocalWhereInput.prototype, "address", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LocalWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LocalWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_relation_filter_input_1.BorrowerRelationFilter, { nullable: true }),
    __metadata("design:type", borrower_relation_filter_input_1.BorrowerRelationFilter)
], LocalWhereInput.prototype, "borrower", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LocalWhereInput.prototype, "borrowerId", void 0);
LocalWhereInput = LocalWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], LocalWhereInput);
exports.LocalWhereInput = LocalWhereInput;
//# sourceMappingURL=local-where.input.js.map