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
exports.Borrower = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const phone_model_1 = require("../phone/phone.model");
const document_model_1 = require("../document/document.model");
const contract_model_1 = require("../contract/contract.model");
const local_model_1 = require("../local/local.model");
const borrower_count_output_1 = require("./borrower-count.output");
let Borrower = class Borrower {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.ID, { nullable: false }),
    __metadata("design:type", String)
], Borrower.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Borrower.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], Borrower.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Borrower.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_model_1.Phone], { nullable: true }),
    __metadata("design:type", Array)
], Borrower.prototype, "phones", void 0);
__decorate([
    (0, graphql_1.Field)(() => [document_model_1.Document], { nullable: true }),
    __metadata("design:type", Array)
], Borrower.prototype, "documents", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Borrower.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Date)
], Borrower.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contract_model_1.Contract], { nullable: true }),
    __metadata("design:type", Array)
], Borrower.prototype, "Contract", void 0);
__decorate([
    (0, graphql_1.Field)(() => [local_model_1.Local], { nullable: true }),
    __metadata("design:type", Array)
], Borrower.prototype, "Local", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_count_output_1.BorrowerCount, { nullable: false }),
    __metadata("design:type", borrower_count_output_1.BorrowerCount)
], Borrower.prototype, "_count", void 0);
Borrower = __decorate([
    (0, graphql_2.ObjectType)()
], Borrower);
exports.Borrower = Borrower;
//# sourceMappingURL=borrower.model.js.map