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
exports.FindManyLoantypeArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loantype_where_input_1 = require("./loantype-where.input");
const loantype_order_by_with_relation_input_1 = require("./loantype-order-by-with-relation.input");
const loantype_where_unique_input_1 = require("./loantype-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const loantype_scalar_field_enum_1 = require("./loantype-scalar-field.enum");
let FindManyLoantypeArgs = class FindManyLoantypeArgs {
};
__decorate([
    (0, graphql_1.Field)(() => loantype_where_input_1.LoantypeWhereInput, { nullable: true }),
    __metadata("design:type", loantype_where_input_1.LoantypeWhereInput)
], FindManyLoantypeArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loantype_order_by_with_relation_input_1.LoantypeOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyLoantypeArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_where_unique_input_1.LoantypeWhereUniqueInput, { nullable: true }),
    __metadata("design:type", loantype_where_unique_input_1.LoantypeWhereUniqueInput)
], FindManyLoantypeArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyLoantypeArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyLoantypeArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loantype_scalar_field_enum_1.LoantypeScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindManyLoantypeArgs.prototype, "distinct", void 0);
FindManyLoantypeArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyLoantypeArgs);
exports.FindManyLoantypeArgs = FindManyLoantypeArgs;
//# sourceMappingURL=find-many-loantype.args.js.map