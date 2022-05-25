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
exports.ContractOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const borrower_order_by_with_relation_input_1 = require("../borrower/borrower-order-by-with-relation.input");
const document_order_by_relation_aggregate_input_1 = require("../document/document-order-by-relation-aggregate.input");
const loan_order_by_relation_aggregate_input_1 = require("../loan/loan-order-by-relation-aggregate.input");
const graphql_3 = require("@nestjs/graphql");
const contract_type_order_by_with_relation_input_1 = require("../contract-type/contract-type-order-by-with-relation.input");
const employee_order_by_with_relation_input_1 = require("../employee/employee-order-by-with-relation.input");
let ContractOrderByWithRelationInput = class ContractOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ContractOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_order_by_with_relation_input_1.BorrowerOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", borrower_order_by_with_relation_input_1.BorrowerOrderByWithRelationInput)
], ContractOrderByWithRelationInput.prototype, "borrower", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ContractOrderByWithRelationInput.prototype, "borrowerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_order_by_relation_aggregate_input_1.DocumentOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", document_order_by_relation_aggregate_input_1.DocumentOrderByRelationAggregateInput)
], ContractOrderByWithRelationInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", loan_order_by_relation_aggregate_input_1.LoanOrderByRelationAggregateInput)
], ContractOrderByWithRelationInput.prototype, "loans", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], ContractOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ContractOrderByWithRelationInput.prototype, "dueDate", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ContractOrderByWithRelationInput.prototype, "signDate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], ContractOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_type_order_by_with_relation_input_1.ContractTypeOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", contract_type_order_by_with_relation_input_1.ContractTypeOrderByWithRelationInput)
], ContractOrderByWithRelationInput.prototype, "contractType", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ContractOrderByWithRelationInput.prototype, "contractTypeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ContractOrderByWithRelationInput.prototype, "loanLeadId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], ContractOrderByWithRelationInput.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_order_by_with_relation_input_1.EmployeeOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", employee_order_by_with_relation_input_1.EmployeeOrderByWithRelationInput)
], ContractOrderByWithRelationInput.prototype, "loanLead", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_order_by_with_relation_input_1.EmployeeOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", employee_order_by_with_relation_input_1.EmployeeOrderByWithRelationInput)
], ContractOrderByWithRelationInput.prototype, "employee", void 0);
ContractOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], ContractOrderByWithRelationInput);
exports.ContractOrderByWithRelationInput = ContractOrderByWithRelationInput;
//# sourceMappingURL=contract-order-by-with-relation.input.js.map