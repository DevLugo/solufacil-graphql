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
var SystemSectionScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemSectionScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
let SystemSectionScalarWhereWithAggregatesInput = SystemSectionScalarWhereWithAggregatesInput_1 = class SystemSectionScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [SystemSectionScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], SystemSectionScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SystemSectionScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], SystemSectionScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [SystemSectionScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], SystemSectionScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], SystemSectionScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], SystemSectionScalarWhereWithAggregatesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], SystemSectionScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], SystemSectionScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
SystemSectionScalarWhereWithAggregatesInput = SystemSectionScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], SystemSectionScalarWhereWithAggregatesInput);
exports.SystemSectionScalarWhereWithAggregatesInput = SystemSectionScalarWhereWithAggregatesInput;
//# sourceMappingURL=system-section-scalar-where-with-aggregates.input.js.map