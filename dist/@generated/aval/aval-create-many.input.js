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
exports.AvalCreateManyInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const Scalars = require("graphql-scalars");
const graphql_3 = require("@nestjs/graphql");
let AvalCreateManyInput = class AvalCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], AvalCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Scalars.GraphQLEmailAddress, { nullable: false }),
    __metadata("design:type", String)
], AvalCreateManyInput.prototype, "email", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", String)
], AvalCreateManyInput.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], AvalCreateManyInput.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], AvalCreateManyInput.prototype, "lastName", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], AvalCreateManyInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_3.HideField)(),
    __metadata("design:type", Object)
], AvalCreateManyInput.prototype, "updatedAt", void 0);
AvalCreateManyInput = __decorate([
    (0, graphql_2.InputType)()
], AvalCreateManyInput);
exports.AvalCreateManyInput = AvalCreateManyInput;
//# sourceMappingURL=aval-create-many.input.js.map