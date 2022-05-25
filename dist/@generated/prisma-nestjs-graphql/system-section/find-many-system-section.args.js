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
exports.FindManySystemSectionArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const system_section_where_input_1 = require("./system-section-where.input");
const system_section_order_by_with_relation_input_1 = require("./system-section-order-by-with-relation.input");
const system_section_where_unique_input_1 = require("./system-section-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const system_section_scalar_field_enum_1 = require("./system-section-scalar-field.enum");
let FindManySystemSectionArgs = class FindManySystemSectionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => system_section_where_input_1.SystemSectionWhereInput, { nullable: true }),
    __metadata("design:type", system_section_where_input_1.SystemSectionWhereInput)
], FindManySystemSectionArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [system_section_order_by_with_relation_input_1.SystemSectionOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManySystemSectionArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_where_unique_input_1.SystemSectionWhereUniqueInput, { nullable: true }),
    __metadata("design:type", system_section_where_unique_input_1.SystemSectionWhereUniqueInput)
], FindManySystemSectionArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManySystemSectionArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManySystemSectionArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [system_section_scalar_field_enum_1.SystemSectionScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindManySystemSectionArgs.prototype, "distinct", void 0);
FindManySystemSectionArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManySystemSectionArgs);
exports.FindManySystemSectionArgs = FindManySystemSectionArgs;
//# sourceMappingURL=find-many-system-section.args.js.map