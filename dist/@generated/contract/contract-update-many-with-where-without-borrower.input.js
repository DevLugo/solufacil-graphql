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
exports.ContractUpdateManyWithWhereWithoutBorrowerInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const contract_scalar_where_input_1 = require("./contract-scalar-where.input");
const contract_update_many_mutation_input_1 = require("./contract-update-many-mutation.input");
let ContractUpdateManyWithWhereWithoutBorrowerInput = class ContractUpdateManyWithWhereWithoutBorrowerInput {
};
__decorate([
    (0, graphql_1.Field)(() => contract_scalar_where_input_1.ContractScalarWhereInput, { nullable: false }),
    __metadata("design:type", contract_scalar_where_input_1.ContractScalarWhereInput)
], ContractUpdateManyWithWhereWithoutBorrowerInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_update_many_mutation_input_1.ContractUpdateManyMutationInput, { nullable: false }),
    __metadata("design:type", contract_update_many_mutation_input_1.ContractUpdateManyMutationInput)
], ContractUpdateManyWithWhereWithoutBorrowerInput.prototype, "data", void 0);
ContractUpdateManyWithWhereWithoutBorrowerInput = __decorate([
    (0, graphql_2.InputType)()
], ContractUpdateManyWithWhereWithoutBorrowerInput);
exports.ContractUpdateManyWithWhereWithoutBorrowerInput = ContractUpdateManyWithWhereWithoutBorrowerInput;
//# sourceMappingURL=contract-update-many-with-where-without-borrower.input.js.map