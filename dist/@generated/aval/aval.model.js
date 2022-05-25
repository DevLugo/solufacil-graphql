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
exports.Aval = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const phone_model_1 = require("../phone/phone.model");
const document_model_1 = require("../document/document.model");
const aval_count_output_1 = require("./aval-count.output");
let Aval = class Aval {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", String)
], Aval.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_model_1.Phone], { nullable: true }),
    __metadata("design:type", Array)
], Aval.prototype, "phones", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Aval.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Aval.prototype, "fullName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Aval.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Aval.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_model_1.Document], { nullable: true }),
    __metadata("design:type", Array)
], Aval.prototype, "documents", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Aval.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Aval.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_count_output_1.AvalCount, { nullable: false }),
    __metadata("design:type", aval_count_output_1.AvalCount)
], Aval.prototype, "_count", void 0);
Aval = __decorate([
    (0, graphql_2.ObjectType)()
], Aval);
exports.Aval = Aval;
//# sourceMappingURL=aval.model.js.map