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
var SystemSectionWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemSectionWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const log_list_relation_filter_input_1 = require("../log/log-list-relation-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let SystemSectionWhereInput = SystemSectionWhereInput_1 = class SystemSectionWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [SystemSectionWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], SystemSectionWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SystemSectionWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], SystemSectionWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SystemSectionWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], SystemSectionWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], SystemSectionWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], SystemSectionWhereInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_list_relation_filter_input_1.LogListRelationFilter, { nullable: true }),
    __metadata("design:type", log_list_relation_filter_input_1.LogListRelationFilter)
], SystemSectionWhereInput.prototype, "logs", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], SystemSectionWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], SystemSectionWhereInput.prototype, "updatedAt", void 0);
SystemSectionWhereInput = SystemSectionWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], SystemSectionWhereInput);
exports.SystemSectionWhereInput = SystemSectionWhereInput;
//# sourceMappingURL=system-section-where.input.js.map