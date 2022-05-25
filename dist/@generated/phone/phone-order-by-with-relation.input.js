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
exports.PhoneOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const borrower_order_by_with_relation_input_1 = require("../borrower/borrower-order-by-with-relation.input");
const graphql_3 = require("@nestjs/graphql");
const employee_order_by_with_relation_input_1 = require("../employee/employee-order-by-with-relation.input");
const aval_order_by_with_relation_input_1 = require("../aval/aval-order-by-with-relation.input");
let PhoneOrderByWithRelationInput = class PhoneOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PhoneOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PhoneOrderByWithRelationInput.prototype, "number", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_order_by_with_relation_input_1.BorrowerOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", borrower_order_by_with_relation_input_1.BorrowerOrderByWithRelationInput)
], PhoneOrderByWithRelationInput.prototype, "Borrower", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PhoneOrderByWithRelationInput.prototype, "borrowerId", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", employee_order_by_with_relation_input_1.EmployeeOrderByWithRelationInput)
], PhoneOrderByWithRelationInput.prototype, "Employee", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PhoneOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], PhoneOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_order_by_with_relation_input_1.AvalOrderByWithRelationInput, { nullable: true }),
    __metadata("design:type", aval_order_by_with_relation_input_1.AvalOrderByWithRelationInput)
], PhoneOrderByWithRelationInput.prototype, "aval", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PhoneOrderByWithRelationInput.prototype, "avalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], PhoneOrderByWithRelationInput.prototype, "employeeId", void 0);
PhoneOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], PhoneOrderByWithRelationInput);
exports.PhoneOrderByWithRelationInput = PhoneOrderByWithRelationInput;
//# sourceMappingURL=phone-order-by-with-relation.input.js.map