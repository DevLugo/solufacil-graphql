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
exports.LogUpdateManyWithoutSectionInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_create_without_section_input_1 = require("./log-create-without-section.input");
const log_create_or_connect_without_section_input_1 = require("./log-create-or-connect-without-section.input");
const log_upsert_with_where_unique_without_section_input_1 = require("./log-upsert-with-where-unique-without-section.input");
const log_create_many_section_input_envelope_input_1 = require("./log-create-many-section-input-envelope.input");
const log_where_unique_input_1 = require("./log-where-unique.input");
const log_update_with_where_unique_without_section_input_1 = require("./log-update-with-where-unique-without-section.input");
const log_update_many_with_where_without_section_input_1 = require("./log-update-many-with-where-without-section.input");
const log_scalar_where_input_1 = require("./log-scalar-where.input");
let LogUpdateManyWithoutSectionInput = class LogUpdateManyWithoutSectionInput {
};
__decorate([
    (0, graphql_1.Field)(() => [log_create_without_section_input_1.LogCreateWithoutSectionInput], { nullable: true }),
    __metadata("design:type", Array)
], LogUpdateManyWithoutSectionInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_create_or_connect_without_section_input_1.LogCreateOrConnectWithoutSectionInput], { nullable: true }),
    __metadata("design:type", Array)
], LogUpdateManyWithoutSectionInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_upsert_with_where_unique_without_section_input_1.LogUpsertWithWhereUniqueWithoutSectionInput], { nullable: true }),
    __metadata("design:type", Array)
], LogUpdateManyWithoutSectionInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_create_many_section_input_envelope_input_1.LogCreateManySectionInputEnvelope, { nullable: true }),
    __metadata("design:type", log_create_many_section_input_envelope_input_1.LogCreateManySectionInputEnvelope)
], LogUpdateManyWithoutSectionInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_where_unique_input_1.LogWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LogUpdateManyWithoutSectionInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_where_unique_input_1.LogWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LogUpdateManyWithoutSectionInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_where_unique_input_1.LogWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LogUpdateManyWithoutSectionInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_where_unique_input_1.LogWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LogUpdateManyWithoutSectionInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_update_with_where_unique_without_section_input_1.LogUpdateWithWhereUniqueWithoutSectionInput], { nullable: true }),
    __metadata("design:type", Array)
], LogUpdateManyWithoutSectionInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_update_many_with_where_without_section_input_1.LogUpdateManyWithWhereWithoutSectionInput], { nullable: true }),
    __metadata("design:type", Array)
], LogUpdateManyWithoutSectionInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_scalar_where_input_1.LogScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], LogUpdateManyWithoutSectionInput.prototype, "deleteMany", void 0);
LogUpdateManyWithoutSectionInput = __decorate([
    (0, graphql_2.InputType)()
], LogUpdateManyWithoutSectionInput);
exports.LogUpdateManyWithoutSectionInput = LogUpdateManyWithoutSectionInput;
//# sourceMappingURL=log-update-many-without-section.input.js.map