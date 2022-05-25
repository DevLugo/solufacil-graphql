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
exports.UpdateOneLocalArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const local_update_input_1 = require("./local-update.input");
const local_where_unique_input_1 = require("./local-where-unique.input");
let UpdateOneLocalArgs = class UpdateOneLocalArgs {
};
__decorate([
    (0, graphql_1.Field)(() => local_update_input_1.LocalUpdateInput, { nullable: false }),
    __metadata("design:type", local_update_input_1.LocalUpdateInput)
], UpdateOneLocalArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => local_where_unique_input_1.LocalWhereUniqueInput, { nullable: false }),
    __metadata("design:type", local_where_unique_input_1.LocalWhereUniqueInput)
], UpdateOneLocalArgs.prototype, "where", void 0);
UpdateOneLocalArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateOneLocalArgs);
exports.UpdateOneLocalArgs = UpdateOneLocalArgs;
//# sourceMappingURL=update-one-local.args.js.map