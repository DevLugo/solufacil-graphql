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
exports.LogUpdateWithWhereUniqueWithoutSectionInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const log_where_unique_input_1 = require("./log-where-unique.input");
const log_update_without_section_input_1 = require("./log-update-without-section.input");
let LogUpdateWithWhereUniqueWithoutSectionInput = class LogUpdateWithWhereUniqueWithoutSectionInput {
};
__decorate([
    (0, graphql_1.Field)(() => log_where_unique_input_1.LogWhereUniqueInput, { nullable: false }),
    __metadata("design:type", log_where_unique_input_1.LogWhereUniqueInput)
], LogUpdateWithWhereUniqueWithoutSectionInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => log_update_without_section_input_1.LogUpdateWithoutSectionInput, { nullable: false }),
    __metadata("design:type", log_update_without_section_input_1.LogUpdateWithoutSectionInput)
], LogUpdateWithWhereUniqueWithoutSectionInput.prototype, "data", void 0);
LogUpdateWithWhereUniqueWithoutSectionInput = __decorate([
    (0, graphql_2.InputType)()
], LogUpdateWithWhereUniqueWithoutSectionInput);
exports.LogUpdateWithWhereUniqueWithoutSectionInput = LogUpdateWithWhereUniqueWithoutSectionInput;
//# sourceMappingURL=log-update-with-where-unique-without-section.input.js.map