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
exports.LogUpsertWithWhereUniqueWithoutSectionInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_where_unique_input_1 = require("./log-where-unique.input");
const log_update_without_section_input_1 = require("./log-update-without-section.input");
const log_create_without_section_input_1 = require("./log-create-without-section.input");
let LogUpsertWithWhereUniqueWithoutSectionInput = class LogUpsertWithWhereUniqueWithoutSectionInput {
};
__decorate([
    (0, graphql_1.Field)(() => log_where_unique_input_1.LogWhereUniqueInput, { nullable: false }),
    __metadata("design:type", log_where_unique_input_1.LogWhereUniqueInput)
], LogUpsertWithWhereUniqueWithoutSectionInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_update_without_section_input_1.LogUpdateWithoutSectionInput, { nullable: false }),
    __metadata("design:type", log_update_without_section_input_1.LogUpdateWithoutSectionInput)
], LogUpsertWithWhereUniqueWithoutSectionInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_create_without_section_input_1.LogCreateWithoutSectionInput, { nullable: false }),
    __metadata("design:type", log_create_without_section_input_1.LogCreateWithoutSectionInput)
], LogUpsertWithWhereUniqueWithoutSectionInput.prototype, "create", void 0);
LogUpsertWithWhereUniqueWithoutSectionInput = __decorate([
    (0, graphql_2.InputType)()
], LogUpsertWithWhereUniqueWithoutSectionInput);
exports.LogUpsertWithWhereUniqueWithoutSectionInput = LogUpsertWithWhereUniqueWithoutSectionInput;
//# sourceMappingURL=log-upsert-with-where-unique-without-section.input.js.map