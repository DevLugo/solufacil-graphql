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
exports.BorrowerUpdateOneRequiredWithoutContractInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const borrower_create_without_contract_input_1 = require("./borrower-create-without-contract.input");
const borrower_create_or_connect_without_contract_input_1 = require("./borrower-create-or-connect-without-contract.input");
const borrower_upsert_without_contract_input_1 = require("./borrower-upsert-without-contract.input");
const borrower_where_unique_input_1 = require("./borrower-where-unique.input");
const borrower_update_without_contract_input_1 = require("./borrower-update-without-contract.input");
let BorrowerUpdateOneRequiredWithoutContractInput = class BorrowerUpdateOneRequiredWithoutContractInput {
};
__decorate([
    (0, graphql_1.Field)(() => borrower_create_without_contract_input_1.BorrowerCreateWithoutContractInput, { nullable: true }),
    __metadata("design:type", borrower_create_without_contract_input_1.BorrowerCreateWithoutContractInput)
], BorrowerUpdateOneRequiredWithoutContractInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_create_or_connect_without_contract_input_1.BorrowerCreateOrConnectWithoutContractInput, { nullable: true }),
    __metadata("design:type", borrower_create_or_connect_without_contract_input_1.BorrowerCreateOrConnectWithoutContractInput)
], BorrowerUpdateOneRequiredWithoutContractInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_upsert_without_contract_input_1.BorrowerUpsertWithoutContractInput, { nullable: true }),
    __metadata("design:type", borrower_upsert_without_contract_input_1.BorrowerUpsertWithoutContractInput)
], BorrowerUpdateOneRequiredWithoutContractInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_where_unique_input_1.BorrowerWhereUniqueInput, { nullable: true }),
    __metadata("design:type", borrower_where_unique_input_1.BorrowerWhereUniqueInput)
], BorrowerUpdateOneRequiredWithoutContractInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_update_without_contract_input_1.BorrowerUpdateWithoutContractInput, { nullable: true }),
    __metadata("design:type", borrower_update_without_contract_input_1.BorrowerUpdateWithoutContractInput)
], BorrowerUpdateOneRequiredWithoutContractInput.prototype, "update", void 0);
BorrowerUpdateOneRequiredWithoutContractInput = __decorate([
    (0, graphql_2.InputType)()
], BorrowerUpdateOneRequiredWithoutContractInput);
exports.BorrowerUpdateOneRequiredWithoutContractInput = BorrowerUpdateOneRequiredWithoutContractInput;
//# sourceMappingURL=borrower-update-one-required-without-contract.input.js.map