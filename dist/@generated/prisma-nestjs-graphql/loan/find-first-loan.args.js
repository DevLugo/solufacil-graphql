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
exports.FindFirstLoanArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_where_input_1 = require("./loan-where.input");
const loan_order_by_with_relation_input_1 = require("./loan-order-by-with-relation.input");
const loan_where_unique_input_1 = require("./loan-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const loan_scalar_field_enum_1 = require("./loan-scalar-field.enum");
let FindFirstLoanArgs = class FindFirstLoanArgs {
};
__decorate([
    (0, graphql_1.Field)(() => loan_where_input_1.LoanWhereInput, { nullable: true }),
    __metadata("design:type", loan_where_input_1.LoanWhereInput)
], FindFirstLoanArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_order_by_with_relation_input_1.LoanOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstLoanArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_where_unique_input_1.LoanWhereUniqueInput, { nullable: true }),
    __metadata("design:type", loan_where_unique_input_1.LoanWhereUniqueInput)
], FindFirstLoanArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstLoanArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstLoanArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_scalar_field_enum_1.LoanScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstLoanArgs.prototype, "distinct", void 0);
FindFirstLoanArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstLoanArgs);
exports.FindFirstLoanArgs = FindFirstLoanArgs;
//# sourceMappingURL=find-first-loan.args.js.map