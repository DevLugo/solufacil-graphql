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
exports.LocalUpdateManyWithWhereWithoutBorrowerInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const local_scalar_where_input_1 = require("./local-scalar-where.input");
const local_update_many_mutation_input_1 = require("./local-update-many-mutation.input");
let LocalUpdateManyWithWhereWithoutBorrowerInput = class LocalUpdateManyWithWhereWithoutBorrowerInput {
};
__decorate([
    (0, graphql_1.Field)(() => local_scalar_where_input_1.LocalScalarWhereInput, { nullable: false }),
    __metadata("design:type", local_scalar_where_input_1.LocalScalarWhereInput)
], LocalUpdateManyWithWhereWithoutBorrowerInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => local_update_many_mutation_input_1.LocalUpdateManyMutationInput, { nullable: false }),
    __metadata("design:type", local_update_many_mutation_input_1.LocalUpdateManyMutationInput)
], LocalUpdateManyWithWhereWithoutBorrowerInput.prototype, "data", void 0);
LocalUpdateManyWithWhereWithoutBorrowerInput = __decorate([
    (0, graphql_2.InputType)()
], LocalUpdateManyWithWhereWithoutBorrowerInput);
exports.LocalUpdateManyWithWhereWithoutBorrowerInput = LocalUpdateManyWithWhereWithoutBorrowerInput;
//# sourceMappingURL=local-update-many-with-where-without-borrower.input.js.map