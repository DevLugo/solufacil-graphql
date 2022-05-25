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
exports.FindManyLogArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_where_input_1 = require("./log-where.input");
const log_order_by_with_relation_input_1 = require("./log-order-by-with-relation.input");
const log_where_unique_input_1 = require("./log-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const log_scalar_field_enum_1 = require("./log-scalar-field.enum");
let FindManyLogArgs = class FindManyLogArgs {
};
__decorate([
    (0, graphql_1.Field)(() => log_where_input_1.LogWhereInput, { nullable: true }),
    __metadata("design:type", log_where_input_1.LogWhereInput)
], FindManyLogArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_order_by_with_relation_input_1.LogOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyLogArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_where_unique_input_1.LogWhereUniqueInput, { nullable: true }),
    __metadata("design:type", log_where_unique_input_1.LogWhereUniqueInput)
], FindManyLogArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyLogArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyLogArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_scalar_field_enum_1.LogScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindManyLogArgs.prototype, "distinct", void 0);
FindManyLogArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyLogArgs);
exports.FindManyLogArgs = FindManyLogArgs;
//# sourceMappingURL=find-many-log.args.js.map