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
exports.LoanUpdateManyWithWhereWithoutContractInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_scalar_where_input_1 = require("./loan-scalar-where.input");
const loan_update_many_mutation_input_1 = require("./loan-update-many-mutation.input");
let LoanUpdateManyWithWhereWithoutContractInput = class LoanUpdateManyWithWhereWithoutContractInput {
};
__decorate([
    (0, graphql_1.Field)(() => loan_scalar_where_input_1.LoanScalarWhereInput, { nullable: false }),
    __metadata("design:type", loan_scalar_where_input_1.LoanScalarWhereInput)
], LoanUpdateManyWithWhereWithoutContractInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_update_many_mutation_input_1.LoanUpdateManyMutationInput, { nullable: false }),
    __metadata("design:type", loan_update_many_mutation_input_1.LoanUpdateManyMutationInput)
], LoanUpdateManyWithWhereWithoutContractInput.prototype, "data", void 0);
LoanUpdateManyWithWhereWithoutContractInput = __decorate([
    (0, graphql_2.InputType)()
], LoanUpdateManyWithWhereWithoutContractInput);
exports.LoanUpdateManyWithWhereWithoutContractInput = LoanUpdateManyWithWhereWithoutContractInput;
//# sourceMappingURL=loan-update-many-with-where-without-contract.input.js.map