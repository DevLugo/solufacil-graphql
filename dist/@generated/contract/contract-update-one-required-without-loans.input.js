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
exports.ContractUpdateOneRequiredWithoutLoansInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const contract_create_without_loans_input_1 = require("./contract-create-without-loans.input");
const contract_create_or_connect_without_loans_input_1 = require("./contract-create-or-connect-without-loans.input");
const contract_upsert_without_loans_input_1 = require("./contract-upsert-without-loans.input");
const contract_where_unique_input_1 = require("./contract-where-unique.input");
const contract_update_without_loans_input_1 = require("./contract-update-without-loans.input");
let ContractUpdateOneRequiredWithoutLoansInput = class ContractUpdateOneRequiredWithoutLoansInput {
};
__decorate([
    (0, graphql_1.Field)(() => contract_create_without_loans_input_1.ContractCreateWithoutLoansInput, { nullable: true }),
    __metadata("design:type", contract_create_without_loans_input_1.ContractCreateWithoutLoansInput)
], ContractUpdateOneRequiredWithoutLoansInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_create_or_connect_without_loans_input_1.ContractCreateOrConnectWithoutLoansInput, { nullable: true }),
    __metadata("design:type", contract_create_or_connect_without_loans_input_1.ContractCreateOrConnectWithoutLoansInput)
], ContractUpdateOneRequiredWithoutLoansInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_upsert_without_loans_input_1.ContractUpsertWithoutLoansInput, { nullable: true }),
    __metadata("design:type", contract_upsert_without_loans_input_1.ContractUpsertWithoutLoansInput)
], ContractUpdateOneRequiredWithoutLoansInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_where_unique_input_1.ContractWhereUniqueInput, { nullable: true }),
    __metadata("design:type", contract_where_unique_input_1.ContractWhereUniqueInput)
], ContractUpdateOneRequiredWithoutLoansInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_update_without_loans_input_1.ContractUpdateWithoutLoansInput, { nullable: true }),
    __metadata("design:type", contract_update_without_loans_input_1.ContractUpdateWithoutLoansInput)
], ContractUpdateOneRequiredWithoutLoansInput.prototype, "update", void 0);
ContractUpdateOneRequiredWithoutLoansInput = __decorate([
    (0, graphql_2.InputType)()
], ContractUpdateOneRequiredWithoutLoansInput);
exports.ContractUpdateOneRequiredWithoutLoansInput = ContractUpdateOneRequiredWithoutLoansInput;
//# sourceMappingURL=contract-update-one-required-without-loans.input.js.map