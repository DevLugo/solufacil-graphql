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
exports.LogCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const system_section_create_nested_one_without_logs_input_1 = require("../system-section/system-section-create-nested-one-without-logs.input");
let LogCreateInput = class LogCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], LogCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_create_nested_one_without_logs_input_1.SystemSectionCreateNestedOneWithoutLogsInput, { nullable: false }),
    __metadata("design:type", system_section_create_nested_one_without_logs_input_1.SystemSectionCreateNestedOneWithoutLogsInput)
], LogCreateInput.prototype, "section", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LogCreateInput.prototype, "requestBody", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LogCreateInput.prototype, "requestType", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], LogCreateInput.prototype, "deviceType", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], LogCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], LogCreateInput.prototype, "updatedAt", void 0);
LogCreateInput = __decorate([
    (0, graphql_2.InputType)()
], LogCreateInput);
exports.LogCreateInput = LogCreateInput;
//# sourceMappingURL=log-create.input.js.map