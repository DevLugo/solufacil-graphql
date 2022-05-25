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
exports.UpsertOnePhoneArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const phone_where_unique_input_1 = require("./phone-where-unique.input");
const phone_create_input_1 = require("./phone-create.input");
const phone_update_input_1 = require("./phone-update.input");
let UpsertOnePhoneArgs = class UpsertOnePhoneArgs {
};
__decorate([
    (0, graphql_1.Field)(() => phone_where_unique_input_1.PhoneWhereUniqueInput, { nullable: false }),
    __metadata("design:type", phone_where_unique_input_1.PhoneWhereUniqueInput)
], UpsertOnePhoneArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_create_input_1.PhoneCreateInput, { nullable: false }),
    __metadata("design:type", phone_create_input_1.PhoneCreateInput)
], UpsertOnePhoneArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_update_input_1.PhoneUpdateInput, { nullable: false }),
    __metadata("design:type", phone_update_input_1.PhoneUpdateInput)
], UpsertOnePhoneArgs.prototype, "update", void 0);
UpsertOnePhoneArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOnePhoneArgs);
exports.UpsertOnePhoneArgs = UpsertOnePhoneArgs;
//# sourceMappingURL=upsert-one-phone.args.js.map