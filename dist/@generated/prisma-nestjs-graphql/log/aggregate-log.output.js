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
exports.AggregateLog = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_count_aggregate_output_1 = require("./log-count-aggregate.output");
const log_min_aggregate_output_1 = require("./log-min-aggregate.output");
const log_max_aggregate_output_1 = require("./log-max-aggregate.output");
let AggregateLog = class AggregateLog {
};
__decorate([
    (0, graphql_1.Field)(() => log_count_aggregate_output_1.LogCountAggregate, { nullable: true }),
    __metadata("design:type", log_count_aggregate_output_1.LogCountAggregate)
], AggregateLog.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_min_aggregate_output_1.LogMinAggregate, { nullable: true }),
    __metadata("design:type", log_min_aggregate_output_1.LogMinAggregate)
], AggregateLog.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_max_aggregate_output_1.LogMaxAggregate, { nullable: true }),
    __metadata("design:type", log_max_aggregate_output_1.LogMaxAggregate)
], AggregateLog.prototype, "_max", void 0);
AggregateLog = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateLog);
exports.AggregateLog = AggregateLog;
//# sourceMappingURL=aggregate-log.output.js.map