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
exports.PhoneCountAggregate = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
let PhoneCountAggregate = class PhoneCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], PhoneCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], PhoneCountAggregate.prototype, "number", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], PhoneCountAggregate.prototype, "borrowerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], PhoneCountAggregate.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], PhoneCountAggregate.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], PhoneCountAggregate.prototype, "avalId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], PhoneCountAggregate.prototype, "employeeId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], PhoneCountAggregate.prototype, "_all", void 0);
PhoneCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], PhoneCountAggregate);
exports.PhoneCountAggregate = PhoneCountAggregate;
//# sourceMappingURL=phone-count-aggregate.output.js.map