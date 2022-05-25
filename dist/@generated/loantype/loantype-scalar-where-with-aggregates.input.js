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
var LoantypeScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoantypeScalarWhereWithAggregatesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_with_aggregates_filter_input_1 = require("../prisma/string-with-aggregates-filter.input");
const int_with_aggregates_filter_input_1 = require("../prisma/int-with-aggregates-filter.input");
const float_with_aggregates_filter_input_1 = require("../prisma/float-with-aggregates-filter.input");
const date_time_with_aggregates_filter_input_1 = require("../prisma/date-time-with-aggregates-filter.input");
let LoantypeScalarWhereWithAggregatesInput = LoantypeScalarWhereWithAggregatesInput_1 = class LoantypeScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [LoantypeScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LoantypeScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LoantypeScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LoantypeScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LoantypeScalarWhereWithAggregatesInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LoantypeScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], LoantypeScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_with_aggregates_filter_input_1.StringWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", string_with_aggregates_filter_input_1.StringWithAggregatesFilter)
], LoantypeScalarWhereWithAggregatesInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_with_aggregates_filter_input_1.IntWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", int_with_aggregates_filter_input_1.IntWithAggregatesFilter)
], LoantypeScalarWhereWithAggregatesInput.prototype, "weekDuration", void 0);
__decorate([
    (0, graphql_1.Field)(() => float_with_aggregates_filter_input_1.FloatWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", float_with_aggregates_filter_input_1.FloatWithAggregatesFilter)
], LoantypeScalarWhereWithAggregatesInput.prototype, "rate", void 0);
__decorate([
    (0, graphql_1.Field)(() => float_with_aggregates_filter_input_1.FloatWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", float_with_aggregates_filter_input_1.FloatWithAggregatesFilter)
], LoantypeScalarWhereWithAggregatesInput.prototype, "overdueRate", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], LoantypeScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", date_time_with_aggregates_filter_input_1.DateTimeWithAggregatesFilter)
], LoantypeScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
LoantypeScalarWhereWithAggregatesInput = LoantypeScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_2.InputType)()
], LoantypeScalarWhereWithAggregatesInput);
exports.LoantypeScalarWhereWithAggregatesInput = LoantypeScalarWhereWithAggregatesInput;
//# sourceMappingURL=loantype-scalar-where-with-aggregates.input.js.map