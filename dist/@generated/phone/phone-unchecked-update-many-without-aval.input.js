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
exports.PhoneUncheckedUpdateManyWithoutAvalInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const phone_create_without_aval_input_1 = require("./phone-create-without-aval.input");
const phone_create_or_connect_without_aval_input_1 = require("./phone-create-or-connect-without-aval.input");
const phone_upsert_with_where_unique_without_aval_input_1 = require("./phone-upsert-with-where-unique-without-aval.input");
const phone_create_many_aval_input_envelope_input_1 = require("./phone-create-many-aval-input-envelope.input");
const phone_where_unique_input_1 = require("./phone-where-unique.input");
const phone_update_with_where_unique_without_aval_input_1 = require("./phone-update-with-where-unique-without-aval.input");
const phone_update_many_with_where_without_aval_input_1 = require("./phone-update-many-with-where-without-aval.input");
const phone_scalar_where_input_1 = require("./phone-scalar-where.input");
let PhoneUncheckedUpdateManyWithoutAvalInput = class PhoneUncheckedUpdateManyWithoutAvalInput {
};
__decorate([
    (0, graphql_1.Field)(() => [phone_create_without_aval_input_1.PhoneCreateWithoutAvalInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUncheckedUpdateManyWithoutAvalInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_create_or_connect_without_aval_input_1.PhoneCreateOrConnectWithoutAvalInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUncheckedUpdateManyWithoutAvalInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_upsert_with_where_unique_without_aval_input_1.PhoneUpsertWithWhereUniqueWithoutAvalInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUncheckedUpdateManyWithoutAvalInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_create_many_aval_input_envelope_input_1.PhoneCreateManyAvalInputEnvelope, { nullable: true }),
    __metadata("design:type", phone_create_many_aval_input_envelope_input_1.PhoneCreateManyAvalInputEnvelope)
], PhoneUncheckedUpdateManyWithoutAvalInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_where_unique_input_1.PhoneWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUncheckedUpdateManyWithoutAvalInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_where_unique_input_1.PhoneWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUncheckedUpdateManyWithoutAvalInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_where_unique_input_1.PhoneWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUncheckedUpdateManyWithoutAvalInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_where_unique_input_1.PhoneWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUncheckedUpdateManyWithoutAvalInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_update_with_where_unique_without_aval_input_1.PhoneUpdateWithWhereUniqueWithoutAvalInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUncheckedUpdateManyWithoutAvalInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_update_many_with_where_without_aval_input_1.PhoneUpdateManyWithWhereWithoutAvalInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUncheckedUpdateManyWithoutAvalInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_scalar_where_input_1.PhoneScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUncheckedUpdateManyWithoutAvalInput.prototype, "deleteMany", void 0);
PhoneUncheckedUpdateManyWithoutAvalInput = __decorate([
    (0, graphql_2.InputType)()
], PhoneUncheckedUpdateManyWithoutAvalInput);
exports.PhoneUncheckedUpdateManyWithoutAvalInput = PhoneUncheckedUpdateManyWithoutAvalInput;
//# sourceMappingURL=phone-unchecked-update-many-without-aval.input.js.map