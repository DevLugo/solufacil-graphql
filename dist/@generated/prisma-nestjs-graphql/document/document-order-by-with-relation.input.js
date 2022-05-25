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
exports.DocumentOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const borrower_order_by_with_relation_input_1 = require("../borrower/borrower-order-by-with-relation.input");
const employee_order_by_with_relation_input_1 = require("../employee/employee-order-by-with-relation.input");
const aval_order_by_with_relation_input_1 = require("../aval/aval-order-by-with-relation.input");
const contract_order_by_with_relation_input_1 = require("../contract/contract-order-by-with-relation.input");
let DocumentOrderByWithRelationInput = class DocumentOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], DocumentOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], DocumentOrderByWithRelationInput.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_order_by_with_relation_input_1.BorrowerOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", borrower_order_by_with_relation_input_1.BorrowerOrderByWithRelationInput)
], DocumentOrderByWithRelationInput.prototype, "borrower", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], DocumentOrderByWithRelationInput.prototype, "borrowerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_order_by_with_relation_input_1.EmployeeOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", employee_order_by_with_relation_input_1.EmployeeOrderByWithRelationInput)
], DocumentOrderByWithRelationInput.prototype, "employee", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_order_by_with_relation_input_1.AvalOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", aval_order_by_with_relation_input_1.AvalOrderByWithRelationInput)
], DocumentOrderByWithRelationInput.prototype, "aval", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], DocumentOrderByWithRelationInput.prototype, "avalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_order_by_with_relation_input_1.ContractOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", contract_order_by_with_relation_input_1.ContractOrderByWithRelationInput)
], DocumentOrderByWithRelationInput.prototype, "contract", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], DocumentOrderByWithRelationInput.prototype, "contractId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], DocumentOrderByWithRelationInput.prototype, "employeeId", void 0);
DocumentOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], DocumentOrderByWithRelationInput);
exports.DocumentOrderByWithRelationInput = DocumentOrderByWithRelationInput;
//# sourceMappingURL=document-order-by-with-relation.input.js.map