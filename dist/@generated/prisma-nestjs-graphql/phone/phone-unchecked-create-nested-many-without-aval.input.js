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
exports.PhoneUncheckedCreateNestedManyWithoutAvalInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const phone_create_without_aval_input_1 = require("./phone-create-without-aval.input");
const phone_create_or_connect_without_aval_input_1 = require("./phone-create-or-connect-without-aval.input");
const phone_create_many_aval_input_envelope_input_1 = require("./phone-create-many-aval-input-envelope.input");
const phone_where_unique_input_1 = require("./phone-where-unique.input");
let PhoneUncheckedCreateNestedManyWithoutAvalInput = class PhoneUncheckedCreateNestedManyWithoutAvalInput {
};
__decorate([
    (0, graphql_1.Field)(() => [phone_create_without_aval_input_1.PhoneCreateWithoutAvalInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUncheckedCreateNestedManyWithoutAvalInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_create_or_connect_without_aval_input_1.PhoneCreateOrConnectWithoutAvalInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUncheckedCreateNestedManyWithoutAvalInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_create_many_aval_input_envelope_input_1.PhoneCreateManyAvalInputEnvelope, { nullable: true }),
    __metadata("design:type", phone_create_many_aval_input_envelope_input_1.PhoneCreateManyAvalInputEnvelope)
], PhoneUncheckedCreateNestedManyWithoutAvalInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [phone_where_unique_input_1.PhoneWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PhoneUncheckedCreateNestedManyWithoutAvalInput.prototype, "connect", void 0);
PhoneUncheckedCreateNestedManyWithoutAvalInput = __decorate([
    (0, graphql_2.InputType)()
], PhoneUncheckedCreateNestedManyWithoutAvalInput);
exports.PhoneUncheckedCreateNestedManyWithoutAvalInput = PhoneUncheckedCreateNestedManyWithoutAvalInput;
//# sourceMappingURL=phone-unchecked-create-nested-many-without-aval.input.js.map