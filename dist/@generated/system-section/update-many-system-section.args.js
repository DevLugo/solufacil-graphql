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
exports.UpdateManySystemSectionArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const system_section_update_many_mutation_input_1 = require("./system-section-update-many-mutation.input");
const system_section_where_input_1 = require("./system-section-where.input");
let UpdateManySystemSectionArgs = class UpdateManySystemSectionArgs {
};
__decorate([
    (0, graphql_1.Field)(() => system_section_update_many_mutation_input_1.SystemSectionUpdateManyMutationInput, { nullable: false }),
    __metadata("design:type", system_section_update_many_mutation_input_1.SystemSectionUpdateManyMutationInput)
], UpdateManySystemSectionArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => system_section_where_input_1.SystemSectionWhereInput, { nullable: true }),
    __metadata("design:type", system_section_where_input_1.SystemSectionWhereInput)
], UpdateManySystemSectionArgs.prototype, "where", void 0);
UpdateManySystemSectionArgs = __decorate([
    (0, graphql_2.ArgsType)()
], UpdateManySystemSectionArgs);
exports.UpdateManySystemSectionArgs = UpdateManySystemSectionArgs;
//# sourceMappingURL=update-many-system-section.args.js.map