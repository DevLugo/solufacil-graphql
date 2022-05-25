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
exports.UpsertOneLogArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_where_unique_input_1 = require("./log-where-unique.input");
const log_create_input_1 = require("./log-create.input");
const log_update_input_1 = require("./log-update.input");
let UpsertOneLogArgs = class UpsertOneLogArgs {
};
__decorate([
    (0, graphql_1.Field)(() => log_where_unique_input_1.LogWhereUniqueInput, { nullable: false }),
    __metadata("design:type", log_where_unique_input_1.LogWhereUniqueInput)
], UpsertOneLogArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_create_input_1.LogCreateInput, { nullable: false }),
    __metadata("design:type", log_create_input_1.LogCreateInput)
], UpsertOneLogArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_update_input_1.LogUpdateInput, { nullable: false }),
    __metadata("design:type", log_update_input_1.LogUpdateInput)
], UpsertOneLogArgs.prototype, "update", void 0);
UpsertOneLogArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpsertOneLogArgs);
exports.UpsertOneLogArgs = UpsertOneLogArgs;
//# sourceMappingURL=upsert-one-log.args.js.map