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
exports.FindManyExpensesArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const expenses_where_input_1 = require("./expenses-where.input");
const expenses_order_by_with_relation_input_1 = require("./expenses-order-by-with-relation.input");
const expenses_where_unique_input_1 = require("./expenses-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const expenses_scalar_field_enum_1 = require("./expenses-scalar-field.enum");
let FindManyExpensesArgs = class FindManyExpensesArgs {
};
__decorate([
    (0, graphql_1.Field)(() => expenses_where_input_1.ExpensesWhereInput, { nullable: true }),
    __metadata("design:type", expenses_where_input_1.ExpensesWhereInput)
], FindManyExpensesArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [expenses_order_by_with_relation_input_1.ExpensesOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyExpensesArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => expenses_where_unique_input_1.ExpensesWhereUniqueInput, { nullable: true }),
    __metadata("design:type", expenses_where_unique_input_1.ExpensesWhereUniqueInput)
], FindManyExpensesArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyExpensesArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyExpensesArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [expenses_scalar_field_enum_1.ExpensesScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindManyExpensesArgs.prototype, "distinct", void 0);
FindManyExpensesArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyExpensesArgs);
exports.FindManyExpensesArgs = FindManyExpensesArgs;
//# sourceMappingURL=find-many-expenses.args.js.map