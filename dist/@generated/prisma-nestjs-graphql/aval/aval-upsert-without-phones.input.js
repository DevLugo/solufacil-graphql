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
exports.AvalUpsertWithoutPhonesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const aval_update_without_phones_input_1 = require("./aval-update-without-phones.input");
const aval_create_without_phones_input_1 = require("./aval-create-without-phones.input");
let AvalUpsertWithoutPhonesInput = class AvalUpsertWithoutPhonesInput {
};
__decorate([
    (0, graphql_1.Field)(() => aval_update_without_phones_input_1.AvalUpdateWithoutPhonesInput, { nullable: false }),
    __metadata("design:type", aval_update_without_phones_input_1.AvalUpdateWithoutPhonesInput)
], AvalUpsertWithoutPhonesInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_create_without_phones_input_1.AvalCreateWithoutPhonesInput, { nullable: false }),
    __metadata("design:type", aval_create_without_phones_input_1.AvalCreateWithoutPhonesInput)
], AvalUpsertWithoutPhonesInput.prototype, "create", void 0);
AvalUpsertWithoutPhonesInput = __decorate([
    (0, graphql_2.InputType)()
], AvalUpsertWithoutPhonesInput);
exports.AvalUpsertWithoutPhonesInput = AvalUpsertWithoutPhonesInput;
//# sourceMappingURL=aval-upsert-without-phones.input.js.map