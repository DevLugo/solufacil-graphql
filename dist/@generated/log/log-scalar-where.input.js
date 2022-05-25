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
var LogScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogScalarWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const string_filter_input_1 = require("../prisma/string-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
let LogScalarWhereInput = LogScalarWhereInput_1 = class LogScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [LogScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LogScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LogScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LogScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [LogScalarWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], LogScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LogScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LogScalarWhereInput.prototype, "requestBody", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LogScalarWhereInput.prototype, "requestType", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LogScalarWhereInput.prototype, "deviceType", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LogScalarWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], LogScalarWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], LogScalarWhereInput.prototype, "systemSectionId", void 0);
LogScalarWhereInput = LogScalarWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], LogScalarWhereInput);
exports.LogScalarWhereInput = LogScalarWhereInput;
//# sourceMappingURL=log-scalar-where.input.js.map