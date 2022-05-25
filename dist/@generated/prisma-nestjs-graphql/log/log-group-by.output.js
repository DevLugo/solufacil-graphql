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
exports.LogGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_count_aggregate_output_1 = require("./log-count-aggregate.output");
const log_min_aggregate_output_1 = require("./log-min-aggregate.output");
const log_max_aggregate_output_1 = require("./log-max-aggregate.output");
let LogGroupBy = class LogGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LogGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LogGroupBy.prototype, "requestBody", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LogGroupBy.prototype, "requestType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LogGroupBy.prototype, "deviceType", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], LogGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], LogGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LogGroupBy.prototype, "systemSectionId", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_count_aggregate_output_1.LogCountAggregate, { nullable: true }),
    __metadata("design:type", log_count_aggregate_output_1.LogCountAggregate)
], LogGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_min_aggregate_output_1.LogMinAggregate, { nullable: true }),
    __metadata("design:type", log_min_aggregate_output_1.LogMinAggregate)
], LogGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_max_aggregate_output_1.LogMaxAggregate, { nullable: true }),
    __metadata("design:type", log_max_aggregate_output_1.LogMaxAggregate)
], LogGroupBy.prototype, "_max", void 0);
LogGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], LogGroupBy);
exports.LogGroupBy = LogGroupBy;
//# sourceMappingURL=log-group-by.output.js.map