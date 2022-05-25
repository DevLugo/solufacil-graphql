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
exports.UpsertOneAvalArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const aval_where_unique_input_1 = require("./aval-where-unique.input");
const aval_create_input_1 = require("./aval-create.input");
const aval_update_input_1 = require("./aval-update.input");
let UpsertOneAvalArgs = class UpsertOneAvalArgs {
};
__decorate([
    (0, graphql_1.Field)(() => aval_where_unique_input_1.AvalWhereUniqueInput, { nullable: false }),
    __metadata("design:type", aval_where_unique_input_1.AvalWhereUniqueInput)
], UpsertOneAvalArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_create_input_1.AvalCreateInput, { nullable: false }),
    __metadata("design:type", aval_create_input_1.AvalCreateInput)
], UpsertOneAvalArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_update_input_1.AvalUpdateInput, { nullable: false }),
    __metadata("design:type", aval_update_input_1.AvalUpdateInput)
], UpsertOneAvalArgs.prototype, "update", void 0);
UpsertOneAvalArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneAvalArgs);
exports.UpsertOneAvalArgs = UpsertOneAvalArgs;
//# sourceMappingURL=upsert-one-aval.args.js.map