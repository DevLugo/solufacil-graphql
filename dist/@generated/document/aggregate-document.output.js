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
exports.AggregateDocument = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const document_count_aggregate_output_1 = require("./document-count-aggregate.output");
const document_min_aggregate_output_1 = require("./document-min-aggregate.output");
const document_max_aggregate_output_1 = require("./document-max-aggregate.output");
let AggregateDocument = class AggregateDocument {
};
__decorate([
    (0, graphql_1.Field)(() => document_count_aggregate_output_1.DocumentCountAggregate, { nullable: true }),
    __metadata("design:type", document_count_aggregate_output_1.DocumentCountAggregate)
], AggregateDocument.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_min_aggregate_output_1.DocumentMinAggregate, { nullable: true }),
    __metadata("design:type", document_min_aggregate_output_1.DocumentMinAggregate)
], AggregateDocument.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => document_max_aggregate_output_1.DocumentMaxAggregate, { nullable: true }),
    __metadata("design:type", document_max_aggregate_output_1.DocumentMaxAggregate)
], AggregateDocument.prototype, "_max", void 0);
AggregateDocument = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateDocument);
exports.AggregateDocument = AggregateDocument;
//# sourceMappingURL=aggregate-document.output.js.map