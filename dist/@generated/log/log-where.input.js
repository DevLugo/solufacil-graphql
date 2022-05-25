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
var LogWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const system_section_relation_filter_input_1 = require("../system-section/system-section-relation-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let LogWhereInput = LogWhereInput_1 = class LogWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [LogWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LogWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LogWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LogWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LogWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LogWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LogWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_relation_filter_input_1.SystemSectionRelationFilter, { nullable: true }),
    __metadata("design:type", system_section_relation_filter_input_1.SystemSectionRelationFilter)
], LogWhereInput.prototype, "section", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LogWhereInput.prototype, "requestBody", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LogWhereInput.prototype, "requestType", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LogWhereInput.prototype, "deviceType", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LogWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LogWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LogWhereInput.prototype, "systemSectionId", void 0);
LogWhereInput = LogWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], LogWhereInput);
exports.LogWhereInput = LogWhereInput;
//# sourceMappingURL=log-where.input.js.map