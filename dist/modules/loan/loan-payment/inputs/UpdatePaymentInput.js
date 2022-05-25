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
exports.LoanPaymentUpdateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const prisma_graphql_type_decimal_1 = require("prisma-graphql-type-decimal");
const nullable_string_field_update_operations_input_1 = require("../../../../@generated/prisma/nullable-string-field-update-operations.input");
let LoanPaymentUpdateInput = class LoanPaymentUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => prisma_graphql_type_decimal_1.GraphQLDecimal, { nullable: false }),
    __metadata("design:type", Object)
], LoanPaymentUpdateInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], LoanPaymentUpdateInput.prototype, "paidDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput, { nullable: true }),
    __metadata("design:type", nullable_string_field_update_operations_input_1.NullableStringFieldUpdateOperationsInput)
], LoanPaymentUpdateInput.prototype, "details", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LoanPaymentUpdateInput.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], LoanPaymentUpdateInput.prototype, "loanId", void 0);
LoanPaymentUpdateInput = __decorate([
    (0, graphql_1.InputType)()
], LoanPaymentUpdateInput);
exports.LoanPaymentUpdateInput = LoanPaymentUpdateInput;
//# sourceMappingURL=UpdatePaymentInput.js.map