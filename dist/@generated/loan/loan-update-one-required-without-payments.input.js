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
exports.LoanUpdateOneRequiredWithoutPaymentsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_create_without_payments_input_1 = require("./loan-create-without-payments.input");
const loan_create_or_connect_without_payments_input_1 = require("./loan-create-or-connect-without-payments.input");
const loan_upsert_without_payments_input_1 = require("./loan-upsert-without-payments.input");
const loan_where_unique_input_1 = require("./loan-where-unique.input");
const loan_update_without_payments_input_1 = require("./loan-update-without-payments.input");
let LoanUpdateOneRequiredWithoutPaymentsInput = class LoanUpdateOneRequiredWithoutPaymentsInput {
};
__decorate([
    (0, graphql_1.Field)(() => loan_create_without_payments_input_1.LoanCreateWithoutPaymentsInput, { nullable: true }),
    __metadata("design:type", loan_create_without_payments_input_1.LoanCreateWithoutPaymentsInput)
], LoanUpdateOneRequiredWithoutPaymentsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_create_or_connect_without_payments_input_1.LoanCreateOrConnectWithoutPaymentsInput, { nullable: true }),
    __metadata("design:type", loan_create_or_connect_without_payments_input_1.LoanCreateOrConnectWithoutPaymentsInput)
], LoanUpdateOneRequiredWithoutPaymentsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_upsert_without_payments_input_1.LoanUpsertWithoutPaymentsInput, { nullable: true }),
    __metadata("design:type", loan_upsert_without_payments_input_1.LoanUpsertWithoutPaymentsInput)
], LoanUpdateOneRequiredWithoutPaymentsInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_where_unique_input_1.LoanWhereUniqueInput, { nullable: true }),
    __metadata("design:type", loan_where_unique_input_1.LoanWhereUniqueInput)
], LoanUpdateOneRequiredWithoutPaymentsInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => loan_update_without_payments_input_1.LoanUpdateWithoutPaymentsInput, { nullable: true }),
    __metadata("design:type", loan_update_without_payments_input_1.LoanUpdateWithoutPaymentsInput)
], LoanUpdateOneRequiredWithoutPaymentsInput.prototype, "update", void 0);
LoanUpdateOneRequiredWithoutPaymentsInput = __decorate([
    (0, graphql_2.InputType)()
], LoanUpdateOneRequiredWithoutPaymentsInput);
exports.LoanUpdateOneRequiredWithoutPaymentsInput = LoanUpdateOneRequiredWithoutPaymentsInput;
//# sourceMappingURL=loan-update-one-required-without-payments.input.js.map