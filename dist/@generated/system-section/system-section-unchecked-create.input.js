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
exports.SystemSectionUncheckedCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_unchecked_create_nested_many_without_section_input_1 = require("../log/log-unchecked-create-nested-many-without-section.input");
let SystemSectionUncheckedCreateInput = class SystemSectionUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], SystemSectionUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], SystemSectionUncheckedCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_unchecked_create_nested_many_without_section_input_1.LogUncheckedCreateNestedManyWithoutSectionInput, { nullable: true }),
    __metadata("design:type", log_unchecked_create_nested_many_without_section_input_1.LogUncheckedCreateNestedManyWithoutSectionInput)
], SystemSectionUncheckedCreateInput.prototype, "logs", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], SystemSectionUncheckedCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], SystemSectionUncheckedCreateInput.prototype, "updatedAt", void 0);
SystemSectionUncheckedCreateInput = __decorate([
    (0, graphql_2.InputType)()
], SystemSectionUncheckedCreateInput);
exports.SystemSectionUncheckedCreateInput = SystemSectionUncheckedCreateInput;
//# sourceMappingURL=system-section-unchecked-create.input.js.map