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
exports.UpsertOneCustomerArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const customer_where_unique_input_1 = require("./customer-where-unique.input");
const customer_create_input_1 = require("./customer-create.input");
const customer_update_input_1 = require("./customer-update.input");
let UpsertOneCustomerArgs = class UpsertOneCustomerArgs {
};
__decorate([
    (0, graphql_1.Field)(() => customer_where_unique_input_1.CustomerWhereUniqueInput, { nullable: false }),
    __metadata("design:type", customer_where_unique_input_1.CustomerWhereUniqueInput)
], UpsertOneCustomerArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => customer_create_input_1.CustomerCreateInput, { nullable: false }),
    __metadata("design:type", customer_create_input_1.CustomerCreateInput)
], UpsertOneCustomerArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => customer_update_input_1.CustomerUpdateInput, { nullable: false }),
    __metadata("design:type", customer_update_input_1.CustomerUpdateInput)
], UpsertOneCustomerArgs.prototype, "update", void 0);
UpsertOneCustomerArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneCustomerArgs);
exports.UpsertOneCustomerArgs = UpsertOneCustomerArgs;
//# sourceMappingURL=upsert-one-customer.args.js.map