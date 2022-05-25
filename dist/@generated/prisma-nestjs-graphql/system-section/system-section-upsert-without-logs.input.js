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
exports.SystemSectionUpsertWithoutLogsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const system_section_update_without_logs_input_1 = require("./system-section-update-without-logs.input");
const system_section_create_without_logs_input_1 = require("./system-section-create-without-logs.input");
let SystemSectionUpsertWithoutLogsInput = class SystemSectionUpsertWithoutLogsInput {
};
__decorate([
    (0, graphql_1.Field)(() => system_section_update_without_logs_input_1.SystemSectionUpdateWithoutLogsInput, { nullable: false }),
    __metadata("design:type", system_section_update_without_logs_input_1.SystemSectionUpdateWithoutLogsInput)
], SystemSectionUpsertWithoutLogsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_create_without_logs_input_1.SystemSectionCreateWithoutLogsInput, { nullable: false }),
    __metadata("design:type", system_section_create_without_logs_input_1.SystemSectionCreateWithoutLogsInput)
], SystemSectionUpsertWithoutLogsInput.prototype, "create", void 0);
SystemSectionUpsertWithoutLogsInput = __decorate([
    (0, graphql_2.InputType)()
], SystemSectionUpsertWithoutLogsInput);
exports.SystemSectionUpsertWithoutLogsInput = SystemSectionUpsertWithoutLogsInput;
//# sourceMappingURL=system-section-upsert-without-logs.input.js.map