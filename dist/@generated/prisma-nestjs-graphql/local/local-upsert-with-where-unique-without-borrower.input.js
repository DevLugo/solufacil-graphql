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
exports.LocalUpsertWithWhereUniqueWithoutBorrowerInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const local_where_unique_input_1 = require("./local-where-unique.input");
const local_update_without_borrower_input_1 = require("./local-update-without-borrower.input");
const local_create_without_borrower_input_1 = require("./local-create-without-borrower.input");
let LocalUpsertWithWhereUniqueWithoutBorrowerInput = class LocalUpsertWithWhereUniqueWithoutBorrowerInput {
};
__decorate([
    (0, graphql_1.Field)(() => local_where_unique_input_1.LocalWhereUniqueInput, { nullable: false }),
    __metadata("design:type", local_where_unique_input_1.LocalWhereUniqueInput)
], LocalUpsertWithWhereUniqueWithoutBorrowerInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => local_update_without_borrower_input_1.LocalUpdateWithoutBorrowerInput, { nullable: false }),
    __metadata("design:type", local_update_without_borrower_input_1.LocalUpdateWithoutBorrowerInput)
], LocalUpsertWithWhereUniqueWithoutBorrowerInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => local_create_without_borrower_input_1.LocalCreateWithoutBorrowerInput, { nullable: false }),
    __metadata("design:type", local_create_without_borrower_input_1.LocalCreateWithoutBorrowerInput)
], LocalUpsertWithWhereUniqueWithoutBorrowerInput.prototype, "create", void 0);
LocalUpsertWithWhereUniqueWithoutBorrowerInput = __decorate([
    (0, graphql_2.InputType)()
], LocalUpsertWithWhereUniqueWithoutBorrowerInput);
exports.LocalUpsertWithWhereUniqueWithoutBorrowerInput = LocalUpsertWithWhereUniqueWithoutBorrowerInput;
//# sourceMappingURL=local-upsert-with-where-unique-without-borrower.input.js.map