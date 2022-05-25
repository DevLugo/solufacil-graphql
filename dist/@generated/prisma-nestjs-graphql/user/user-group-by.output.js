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
exports.UserGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_count_aggregate_output_1 = require("./user-count-aggregate.output");
const user_min_aggregate_output_1 = require("./user-min-aggregate.output");
const user_max_aggregate_output_1 = require("./user-max-aggregate.output");
let UserGroupBy = class UserGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], UserGroupBy.prototype, "lastLogin", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], UserGroupBy.prototype, "profilePicture", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], UserGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], UserGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_count_aggregate_output_1.UserCountAggregate, { nullable: true }),
    __metadata("design:type", user_count_aggregate_output_1.UserCountAggregate)
], UserGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_min_aggregate_output_1.UserMinAggregate, { nullable: true }),
    __metadata("design:type", user_min_aggregate_output_1.UserMinAggregate)
], UserGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_max_aggregate_output_1.UserMaxAggregate, { nullable: true }),
    __metadata("design:type", user_max_aggregate_output_1.UserMaxAggregate)
], UserGroupBy.prototype, "_max", void 0);
UserGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], UserGroupBy);
exports.UserGroupBy = UserGroupBy;
//# sourceMappingURL=user-group-by.output.js.map