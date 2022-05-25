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
exports.PhoneCreateManyAvalInputEnvelope = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const phone_create_many_aval_input_1 = require("./phone-create-many-aval.input");
let PhoneCreateManyAvalInputEnvelope = class PhoneCreateManyAvalInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [phone_create_many_aval_input_1.PhoneCreateManyAvalInput], { nullable: false }),
    __metadata("design:type", Array)
], PhoneCreateManyAvalInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], PhoneCreateManyAvalInputEnvelope.prototype, "skipDuplicates", void 0);
PhoneCreateManyAvalInputEnvelope = __decorate([
    (0, graphql_2.InputType)()
], PhoneCreateManyAvalInputEnvelope);
exports.PhoneCreateManyAvalInputEnvelope = PhoneCreateManyAvalInputEnvelope;
//# sourceMappingURL=phone-create-many-aval-input-envelope.input.js.map