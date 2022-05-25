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
exports.UpdateManyDocumentArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const document_update_many_mutation_input_1 = require("./document-update-many-mutation.input");
const document_where_input_1 = require("./document-where.input");
let UpdateManyDocumentArgs = class UpdateManyDocumentArgs {
};
__decorate([
    (0, graphql_1.Field)(() => document_update_many_mutation_input_1.DocumentUpdateManyMutationInput, { nullable: false }),
    __metadata("design:type", document_update_many_mutation_input_1.DocumentUpdateManyMutationInput)
], UpdateManyDocumentArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_where_input_1.DocumentWhereInput, { nullable: true }),
    __metadata("design:type", document_where_input_1.DocumentWhereInput)
], UpdateManyDocumentArgs.prototype, "where", void 0);
UpdateManyDocumentArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateManyDocumentArgs);
exports.UpdateManyDocumentArgs = UpdateManyDocumentArgs;
//# sourceMappingURL=update-many-document.args.js.map