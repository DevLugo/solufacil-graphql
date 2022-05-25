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
var NestedIntNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedIntNullableFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let NestedIntNullableFilter = NestedIntNullableFilter_1 = class NestedIntNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], NestedIntNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true }),
    __metadata("design:type", Array)
], NestedIntNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_3.Int], { nullable: true }),
    __metadata("design:type", Array)
], NestedIntNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], NestedIntNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], NestedIntNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], NestedIntNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], NestedIntNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter_1, { nullable: true }),
    __metadata("design:type", NestedIntNullableFilter)
], NestedIntNullableFilter.prototype, "not", void 0);
NestedIntNullableFilter = NestedIntNullableFilter_1 = __decorate([
    (0, graphql_2.InputType)()
], NestedIntNullableFilter);
exports.NestedIntNullableFilter = NestedIntNullableFilter;
//# sourceMappingURL=nested-int-nullable-filter.input.js.map