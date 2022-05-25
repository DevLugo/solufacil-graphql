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
exports.FindManyPhoneArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const phone_where_input_1 = require("./phone-where.input");
const phone_order_by_with_relation_input_1 = require("./phone-order-by-with-relation.input");
const phone_where_unique_input_1 = require("./phone-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const phone_scalar_field_enum_1 = require("./phone-scalar-field.enum");
let FindManyPhoneArgs = class FindManyPhoneArgs {
};
__decorate([
    (0, graphql_1.Field)(() => phone_where_input_1.PhoneWhereInput, { nullable: true }),
    __metadata("design:type", phone_where_input_1.PhoneWhereInput)
], FindManyPhoneArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_order_by_with_relation_input_1.PhoneOrderByWithRelationInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyPhoneArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_where_unique_input_1.PhoneWhereUniqueInput, { nullable: true }),
    __metadata("design:type", phone_where_unique_input_1.PhoneWhereUniqueInput)
], FindManyPhoneArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyPhoneArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyPhoneArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_scalar_field_enum_1.PhoneScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindManyPhoneArgs.prototype, "distinct", void 0);
FindManyPhoneArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyPhoneArgs);
exports.FindManyPhoneArgs = FindManyPhoneArgs;
//# sourceMappingURL=find-many-phone.args.js.map