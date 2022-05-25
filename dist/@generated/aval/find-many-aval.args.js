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
exports.FindManyAvalArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const aval_where_input_1 = require("./aval-where.input");
const aval_order_by_with_relation_input_1 = require("./aval-order-by-with-relation.input");
const aval_where_unique_input_1 = require("./aval-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const aval_scalar_field_enum_1 = require("./aval-scalar-field.enum");
let FindManyAvalArgs = class FindManyAvalArgs {
};
__decorate([
    (0, graphql_1.Field)(() => aval_where_input_1.AvalWhereInput, { nullable: true }),
    __metadata("design:type", aval_where_input_1.AvalWhereInput)
], FindManyAvalArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [aval_order_by_with_relation_input_1.AvalOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyAvalArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_where_unique_input_1.AvalWhereUniqueInput, { nullable: true }),
    __metadata("design:type", aval_where_unique_input_1.AvalWhereUniqueInput)
], FindManyAvalArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyAvalArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyAvalArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [aval_scalar_field_enum_1.AvalScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindManyAvalArgs.prototype, "distinct", void 0);
FindManyAvalArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyAvalArgs);
exports.FindManyAvalArgs = FindManyAvalArgs;
//# sourceMappingURL=find-many-aval.args.js.map