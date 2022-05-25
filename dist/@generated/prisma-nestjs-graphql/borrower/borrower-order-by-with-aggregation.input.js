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
exports.BorrowerOrderByWithAggregationInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const sort_order_enum_1 = require("../prisma/sort-order.enum");
const graphql_3 = require("@nestjs/graphql");
const borrower_count_order_by_aggregate_input_1 = require("./borrower-count-order-by-aggregate.input");
const borrower_max_order_by_aggregate_input_1 = require("./borrower-max-order-by-aggregate.input");
const borrower_min_order_by_aggregate_input_1 = require("./borrower-min-order-by-aggregate.input");
let BorrowerOrderByWithAggregationInput = class BorrowerOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], BorrowerOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], BorrowerOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], BorrowerOrderByWithAggregationInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => sort_order_enum_1.SortOrder, { nullable: true }),
    __metadata("design:type", Object)
], BorrowerOrderByWithAggregationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], BorrowerOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], BorrowerOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_count_order_by_aggregate_input_1.BorrowerCountOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", borrower_count_order_by_aggregate_input_1.BorrowerCountOrderByAggregateInput)
], BorrowerOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_max_order_by_aggregate_input_1.BorrowerMaxOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", borrower_max_order_by_aggregate_input_1.BorrowerMaxOrderByAggregateInput)
], BorrowerOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_min_order_by_aggregate_input_1.BorrowerMinOrderByAggregateInput, { nullable: true }),
    __metadata("design:type", borrower_min_order_by_aggregate_input_1.BorrowerMinOrderByAggregateInput)
], BorrowerOrderByWithAggregationInput.prototype, "_min", void 0);
BorrowerOrderByWithAggregationInput = __decorate([
    (0, graphql_2.InputType)()
], BorrowerOrderByWithAggregationInput);
exports.BorrowerOrderByWithAggregationInput = BorrowerOrderByWithAggregationInput;
//# sourceMappingURL=borrower-order-by-with-aggregation.input.js.map