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
exports.FindFirstLocalArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const local_where_input_1 = require("./local-where.input");
const local_order_by_with_relation_input_1 = require("./local-order-by-with-relation.input");
const local_where_unique_input_1 = require("./local-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const local_scalar_field_enum_1 = require("./local-scalar-field.enum");
let FindFirstLocalArgs = class FindFirstLocalArgs {
};
__decorate([
    (0, graphql_1.Field)(() => local_where_input_1.LocalWhereInput, { nullable: true }),
    __metadata("design:type", local_where_input_1.LocalWhereInput)
], FindFirstLocalArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [local_order_by_with_relation_input_1.LocalOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstLocalArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => local_where_unique_input_1.LocalWhereUniqueInput, { nullable: true }),
    __metadata("design:type", local_where_unique_input_1.LocalWhereUniqueInput)
], FindFirstLocalArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstLocalArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstLocalArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [local_scalar_field_enum_1.LocalScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstLocalArgs.prototype, "distinct", void 0);
FindFirstLocalArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstLocalArgs);
exports.FindFirstLocalArgs = FindFirstLocalArgs;
//# sourceMappingURL=find-first-local.args.js.map