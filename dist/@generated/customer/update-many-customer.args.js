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
exports.UpdateManyCustomerArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const customer_update_many_mutation_input_1 = require("./customer-update-many-mutation.input");
const customer_where_input_1 = require("./customer-where.input");
let UpdateManyCustomerArgs = class UpdateManyCustomerArgs {
};
__decorate([
    (0, graphql_1.Field)(() => customer_update_many_mutation_input_1.CustomerUpdateManyMutationInput, { nullable: false }),
    __metadata("design:type", customer_update_many_mutation_input_1.CustomerUpdateManyMutationInput)
], UpdateManyCustomerArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => customer_where_input_1.CustomerWhereInput, { nullable: true }),
    __metadata("design:type", customer_where_input_1.CustomerWhereInput)
], UpdateManyCustomerArgs.prototype, "where", void 0);
UpdateManyCustomerArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateManyCustomerArgs);
exports.UpdateManyCustomerArgs = UpdateManyCustomerArgs;
//# sourceMappingURL=update-many-customer.args.js.map