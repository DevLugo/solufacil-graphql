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
exports.LoantypeUpdateOneRequiredWithoutLoanInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loantype_create_without_loan_input_1 = require("./loantype-create-without-loan.input");
const loantype_create_or_connect_without_loan_input_1 = require("./loantype-create-or-connect-without-loan.input");
const loantype_upsert_without_loan_input_1 = require("./loantype-upsert-without-loan.input");
const loantype_where_unique_input_1 = require("./loantype-where-unique.input");
const loantype_update_without_loan_input_1 = require("./loantype-update-without-loan.input");
let LoantypeUpdateOneRequiredWithoutLoanInput = class LoantypeUpdateOneRequiredWithoutLoanInput {
};
__decorate([
    (0, graphql_1.Field)(() => loantype_create_without_loan_input_1.LoantypeCreateWithoutLoanInput, { nullable: true }),
    __metadata("design:type", loantype_create_without_loan_input_1.LoantypeCreateWithoutLoanInput)
], LoantypeUpdateOneRequiredWithoutLoanInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_create_or_connect_without_loan_input_1.LoantypeCreateOrConnectWithoutLoanInput, { nullable: true }),
    __metadata("design:type", loantype_create_or_connect_without_loan_input_1.LoantypeCreateOrConnectWithoutLoanInput)
], LoantypeUpdateOneRequiredWithoutLoanInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_upsert_without_loan_input_1.LoantypeUpsertWithoutLoanInput, { nullable: true }),
    __metadata("design:type", loantype_upsert_without_loan_input_1.LoantypeUpsertWithoutLoanInput)
], LoantypeUpdateOneRequiredWithoutLoanInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_where_unique_input_1.LoantypeWhereUniqueInput, { nullable: true }),
    __metadata("design:type", loantype_where_unique_input_1.LoantypeWhereUniqueInput)
], LoantypeUpdateOneRequiredWithoutLoanInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => loantype_update_without_loan_input_1.LoantypeUpdateWithoutLoanInput, { nullable: true }),
    __metadata("design:type", loantype_update_without_loan_input_1.LoantypeUpdateWithoutLoanInput)
], LoantypeUpdateOneRequiredWithoutLoanInput.prototype, "update", void 0);
LoantypeUpdateOneRequiredWithoutLoanInput = __decorate([
    (0, graphql_2.InputType)()
], LoantypeUpdateOneRequiredWithoutLoanInput);
exports.LoantypeUpdateOneRequiredWithoutLoanInput = LoantypeUpdateOneRequiredWithoutLoanInput;
//# sourceMappingURL=loantype-update-one-required-without-loan.input.js.map