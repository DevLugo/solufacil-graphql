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
exports.PhoneUpdateManyWithoutBorrowerInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const phone_create_without_borrower_input_1 = require("./phone-create-without-borrower.input");
const phone_create_or_connect_without_borrower_input_1 = require("./phone-create-or-connect-without-borrower.input");
const phone_upsert_with_where_unique_without_borrower_input_1 = require("./phone-upsert-with-where-unique-without-borrower.input");
const phone_create_many_borrower_input_envelope_input_1 = require("./phone-create-many-borrower-input-envelope.input");
const phone_where_unique_input_1 = require("./phone-where-unique.input");
const phone_update_with_where_unique_without_borrower_input_1 = require("./phone-update-with-where-unique-without-borrower.input");
const phone_update_many_with_where_without_borrower_input_1 = require("./phone-update-many-with-where-without-borrower.input");
const phone_scalar_where_input_1 = require("./phone-scalar-where.input");
let PhoneUpdateManyWithoutBorrowerInput = class PhoneUpdateManyWithoutBorrowerInput {
};
__decorate([
    (0, graphql_1.Field)(() => [phone_create_without_borrower_input_1.PhoneCreateWithoutBorrowerInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUpdateManyWithoutBorrowerInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_create_or_connect_without_borrower_input_1.PhoneCreateOrConnectWithoutBorrowerInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUpdateManyWithoutBorrowerInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_upsert_with_where_unique_without_borrower_input_1.PhoneUpsertWithWhereUniqueWithoutBorrowerInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUpdateManyWithoutBorrowerInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_create_many_borrower_input_envelope_input_1.PhoneCreateManyBorrowerInputEnvelope, { nullable: true }),
    __metadata("design:type", phone_create_many_borrower_input_envelope_input_1.PhoneCreateManyBorrowerInputEnvelope)
], PhoneUpdateManyWithoutBorrowerInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_where_unique_input_1.PhoneWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUpdateManyWithoutBorrowerInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_where_unique_input_1.PhoneWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUpdateManyWithoutBorrowerInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_where_unique_input_1.PhoneWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUpdateManyWithoutBorrowerInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_where_unique_input_1.PhoneWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUpdateManyWithoutBorrowerInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_update_with_where_unique_without_borrower_input_1.PhoneUpdateWithWhereUniqueWithoutBorrowerInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUpdateManyWithoutBorrowerInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_update_many_with_where_without_borrower_input_1.PhoneUpdateManyWithWhereWithoutBorrowerInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUpdateManyWithoutBorrowerInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_scalar_where_input_1.PhoneScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUpdateManyWithoutBorrowerInput.prototype, "deleteMany", void 0);
PhoneUpdateManyWithoutBorrowerInput = __decorate([
    (0, graphql_2.InputType)()
], PhoneUpdateManyWithoutBorrowerInput);
exports.PhoneUpdateManyWithoutBorrowerInput = PhoneUpdateManyWithoutBorrowerInput;
//# sourceMappingURL=phone-update-many-without-borrower.input.js.map