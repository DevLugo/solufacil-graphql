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
exports.ContractTypeMaxAggregateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let ContractTypeMaxAggregateInput = class ContractTypeMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], ContractTypeMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], ContractTypeMaxAggregateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], ContractTypeMaxAggregateInput.prototype, "monthDuration", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], ContractTypeMaxAggregateInput.prototype, "amount", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], ContractTypeMaxAggregateInput.prototype, "maxRate", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Boolean)
], ContractTypeMaxAggregateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Boolean)
], ContractTypeMaxAggregateInput.prototype, "updatedAt", void 0);
ContractTypeMaxAggregateInput = __decorate([
    (0, graphql_2.InputType)()
], ContractTypeMaxAggregateInput);
exports.ContractTypeMaxAggregateInput = ContractTypeMaxAggregateInput;
//# sourceMappingURL=contract-type-max-aggregate.input.js.map