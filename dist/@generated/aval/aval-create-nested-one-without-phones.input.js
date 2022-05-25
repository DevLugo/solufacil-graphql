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
exports.AvalCreateNestedOneWithoutPhonesInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const aval_create_without_phones_input_1 = require("./aval-create-without-phones.input");
const aval_create_or_connect_without_phones_input_1 = require("./aval-create-or-connect-without-phones.input");
const aval_where_unique_input_1 = require("./aval-where-unique.input");
let AvalCreateNestedOneWithoutPhonesInput = class AvalCreateNestedOneWithoutPhonesInput {
};
__decorate([
    (0, graphql_1.Field)(() => aval_create_without_phones_input_1.AvalCreateWithoutPhonesInput, { nullable: true }),
    __metadata("design:type", aval_create_without_phones_input_1.AvalCreateWithoutPhonesInput)
], AvalCreateNestedOneWithoutPhonesInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_create_or_connect_without_phones_input_1.AvalCreateOrConnectWithoutPhonesInput, { nullable: true }),
    __metadata("design:type", aval_create_or_connect_without_phones_input_1.AvalCreateOrConnectWithoutPhonesInput)
], AvalCreateNestedOneWithoutPhonesInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => aval_where_unique_input_1.AvalWhereUniqueInput, { nullable: true }),
    __metadata("design:type", aval_where_unique_input_1.AvalWhereUniqueInput)
], AvalCreateNestedOneWithoutPhonesInput.prototype, "connect", void 0);
AvalCreateNestedOneWithoutPhonesInput = __decorate([
    (0, graphql_2.InputType)()
], AvalCreateNestedOneWithoutPhonesInput);
exports.AvalCreateNestedOneWithoutPhonesInput = AvalCreateNestedOneWithoutPhonesInput;
//# sourceMappingURL=aval-create-nested-one-without-phones.input.js.map