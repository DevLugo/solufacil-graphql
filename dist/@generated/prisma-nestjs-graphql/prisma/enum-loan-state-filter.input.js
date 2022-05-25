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
exports.EnumLoanStateFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const loan_state_enum_1 = require("./loan-state.enum");
const nested_enum_loan_state_filter_input_1 = require("./nested-enum-loan-state-filter.input");
let EnumLoanStateFilter = class EnumLoanStateFilter {
};
__decorate([
    (0, graphql_1.Field)(() => loan_state_enum_1.LoanState, { nullable: true }),
    __metadata("design:type", Object)
], EnumLoanStateFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_state_enum_1.LoanState], { nullable: true }),
    __metadata("design:type", Array)
], EnumLoanStateFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [loan_state_enum_1.LoanState], { nullable: true }),
    __metadata("design:type", Array)
], EnumLoanStateFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_enum_loan_state_filter_input_1.NestedEnumLoanStateFilter, { nullable: true }),
    __metadata("design:type", nested_enum_loan_state_filter_input_1.NestedEnumLoanStateFilter)
], EnumLoanStateFilter.prototype, "not", void 0);
EnumLoanStateFilter = __decorate([
    (0, graphql_2.InputType)()
], EnumLoanStateFilter);
exports.EnumLoanStateFilter = EnumLoanStateFilter;
//# sourceMappingURL=enum-loan-state-filter.input.js.map