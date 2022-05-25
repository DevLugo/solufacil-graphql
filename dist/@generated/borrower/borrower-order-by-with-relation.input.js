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
exports.BorrowerOrderByWithRelationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const phone_order_by_relation_aggregate_input_1 = require("../phone/phone-order-by-relation-aggregate.input");
const document_order_by_relation_aggregate_input_1 = require("../document/document-order-by-relation-aggregate.input");
const graphql_3 = require("@nestjs/graphql");
const contract_order_by_relation_aggregate_input_1 = require("../contract/contract-order-by-relation-aggregate.input");
const local_order_by_relation_aggregate_input_1 = require("../local/local-order-by-relation-aggregate.input");
let BorrowerOrderByWithRelationInput = class BorrowerOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], BorrowerOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], BorrowerOrderByWithRelationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], BorrowerOrderByWithRelationInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], BorrowerOrderByWithRelationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_order_by_relation_aggregate_input_1.PhoneOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", phone_order_by_relation_aggregate_input_1.PhoneOrderByRelationAggregateInput)
], BorrowerOrderByWithRelationInput.prototype, "phones", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_order_by_relation_aggregate_input_1.DocumentOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", document_order_by_relation_aggregate_input_1.DocumentOrderByRelationAggregateInput)
], BorrowerOrderByWithRelationInput.prototype, "documents", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], BorrowerOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], BorrowerOrderByWithRelationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => contract_order_by_relation_aggregate_input_1.ContractOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", contract_order_by_relation_aggregate_input_1.ContractOrderByRelationAggregateInput)
], BorrowerOrderByWithRelationInput.prototype, "Contract", void 0);
__decorate([
    (0, graphql_1.Field)(() => local_order_by_relation_aggregate_input_1.LocalOrderByRelationAggregateInput, { nullable: true }),
    __metadata("design:type", local_order_by_relation_aggregate_input_1.LocalOrderByRelationAggregateInput)
], BorrowerOrderByWithRelationInput.prototype, "Local", void 0);
BorrowerOrderByWithRelationInput = __decorate([
    (0, graphql_2.InputType)()
], BorrowerOrderByWithRelationInput);
exports.BorrowerOrderByWithRelationInput = BorrowerOrderByWithRelationInput;
//# sourceMappingURL=borrower-order-by-with-relation.input.js.map