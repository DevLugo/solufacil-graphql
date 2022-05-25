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
exports.CustomCreateLoanInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_scalars_1 = require("graphql-scalars");
const loan_create_input_1 = require("../../@generated/loan/loan-create.input");
let CustomCreateLoanInput = class CustomCreateLoanInput extends loan_create_input_1.LoanCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_scalars_1.GraphQLDate, { nullable: false }),
    __metadata("design:type", Object)
], CustomCreateLoanInput.prototype, "firstPaymentDate", void 0);
CustomCreateLoanInput = __decorate([
    (0, graphql_1.InputType)()
], CustomCreateLoanInput);
exports.CustomCreateLoanInput = CustomCreateLoanInput;
//# sourceMappingURL=CustomCreateLoanInput.js.map