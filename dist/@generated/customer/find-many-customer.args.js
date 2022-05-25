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
exports.FindManyCustomerArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const customer_where_input_1 = require("./customer-where.input");
const customer_order_by_with_relation_input_1 = require("./customer-order-by-with-relation.input");
const customer_where_unique_input_1 = require("./customer-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const customer_scalar_field_enum_1 = require("./customer-scalar-field.enum");
let FindManyCustomerArgs = class FindManyCustomerArgs {
};
__decorate([
    (0, graphql_1.Field)(() => customer_where_input_1.CustomerWhereInput, { nullable: true }),
    __metadata("design:type", customer_where_input_1.CustomerWhereInput)
], FindManyCustomerArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [customer_order_by_with_relation_input_1.CustomerOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyCustomerArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => customer_where_unique_input_1.CustomerWhereUniqueInput, { nullable: true }),
    __metadata("design:type", customer_where_unique_input_1.CustomerWhereUniqueInput)
], FindManyCustomerArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyCustomerArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyCustomerArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [customer_scalar_field_enum_1.CustomerScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindManyCustomerArgs.prototype, "distinct", void 0);
FindManyCustomerArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyCustomerArgs);
exports.FindManyCustomerArgs = FindManyCustomerArgs;
//# sourceMappingURL=find-many-customer.args.js.map