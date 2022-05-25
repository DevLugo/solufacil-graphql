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
exports.LogUncheckedCreateNestedManyWithoutSectionInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_create_without_section_input_1 = require("./log-create-without-section.input");
const log_create_or_connect_without_section_input_1 = require("./log-create-or-connect-without-section.input");
const log_create_many_section_input_envelope_input_1 = require("./log-create-many-section-input-envelope.input");
const log_where_unique_input_1 = require("./log-where-unique.input");
let LogUncheckedCreateNestedManyWithoutSectionInput = class LogUncheckedCreateNestedManyWithoutSectionInput {
};
__decorate([
    (0, graphql_1.Field)(() => [log_create_without_section_input_1.LogCreateWithoutSectionInput], { nullable: true }),
    __metadata("design:type", Array)
], LogUncheckedCreateNestedManyWithoutSectionInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_create_or_connect_without_section_input_1.LogCreateOrConnectWithoutSectionInput], { nullable: true }),
    __metadata("design:type", Array)
], LogUncheckedCreateNestedManyWithoutSectionInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_create_many_section_input_envelope_input_1.LogCreateManySectionInputEnvelope, { nullable: true }),
    __metadata("design:type", log_create_many_section_input_envelope_input_1.LogCreateManySectionInputEnvelope)
], LogUncheckedCreateNestedManyWithoutSectionInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [log_where_unique_input_1.LogWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], LogUncheckedCreateNestedManyWithoutSectionInput.prototype, "connect", void 0);
LogUncheckedCreateNestedManyWithoutSectionInput = __decorate([
    (0, graphql_2.InputType)()
], LogUncheckedCreateNestedManyWithoutSectionInput);
exports.LogUncheckedCreateNestedManyWithoutSectionInput = LogUncheckedCreateNestedManyWithoutSectionInput;
//# sourceMappingURL=log-unchecked-create-nested-many-without-section.input.js.map