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
exports.FindFirstBorrowerArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const borrower_where_input_1 = require("./borrower-where.input");
const borrower_order_by_with_relation_input_1 = require("./borrower-order-by-with-relation.input");
const borrower_where_unique_input_1 = require("./borrower-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const borrower_scalar_field_enum_1 = require("./borrower-scalar-field.enum");
let FindFirstBorrowerArgs = class FindFirstBorrowerArgs {
};
__decorate([
    (0, graphql_1.Field)(() => borrower_where_input_1.BorrowerWhereInput, { nullable: true }),
    __metadata("design:type", borrower_where_input_1.BorrowerWhereInput)
], FindFirstBorrowerArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [borrower_order_by_with_relation_input_1.BorrowerOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstBorrowerArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_where_unique_input_1.BorrowerWhereUniqueInput, { nullable: true }),
    __metadata("design:type", borrower_where_unique_input_1.BorrowerWhereUniqueInput)
], FindFirstBorrowerArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstBorrowerArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindFirstBorrowerArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [borrower_scalar_field_enum_1.BorrowerScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindFirstBorrowerArgs.prototype, "distinct", void 0);
FindFirstBorrowerArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindFirstBorrowerArgs);
exports.FindFirstBorrowerArgs = FindFirstBorrowerArgs;
//# sourceMappingURL=find-first-borrower.args.js.map