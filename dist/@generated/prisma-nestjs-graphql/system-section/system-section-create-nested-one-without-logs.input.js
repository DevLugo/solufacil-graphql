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
exports.SystemSectionCreateNestedOneWithoutLogsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const system_section_create_without_logs_input_1 = require("./system-section-create-without-logs.input");
const system_section_create_or_connect_without_logs_input_1 = require("./system-section-create-or-connect-without-logs.input");
const system_section_where_unique_input_1 = require("./system-section-where-unique.input");
let SystemSectionCreateNestedOneWithoutLogsInput = class SystemSectionCreateNestedOneWithoutLogsInput {
};
__decorate([
    (0, graphql_1.Field)(() => system_section_create_without_logs_input_1.SystemSectionCreateWithoutLogsInput, { nullable: true }),
    __metadata("design:type", system_section_create_without_logs_input_1.SystemSectionCreateWithoutLogsInput)
], SystemSectionCreateNestedOneWithoutLogsInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_create_or_connect_without_logs_input_1.SystemSectionCreateOrConnectWithoutLogsInput, { nullable: true }),
    __metadata("design:type", system_section_create_or_connect_without_logs_input_1.SystemSectionCreateOrConnectWithoutLogsInput)
], SystemSectionCreateNestedOneWithoutLogsInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_where_unique_input_1.SystemSectionWhereUniqueInput, { nullable: true }),
    __metadata("design:type", system_section_where_unique_input_1.SystemSectionWhereUniqueInput)
], SystemSectionCreateNestedOneWithoutLogsInput.prototype, "connect", void 0);
SystemSectionCreateNestedOneWithoutLogsInput = __decorate([
    (0, graphql_2.InputType)()
], SystemSectionCreateNestedOneWithoutLogsInput);
exports.SystemSectionCreateNestedOneWithoutLogsInput = SystemSectionCreateNestedOneWithoutLogsInput;
//# sourceMappingURL=system-section-create-nested-one-without-logs.input.js.map