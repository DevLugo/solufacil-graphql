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
exports.PhoneUpdateWithWhereUniqueWithoutBorrowerInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const phone_where_unique_input_1 = require("./phone-where-unique.input");
const phone_update_without_borrower_input_1 = require("./phone-update-without-borrower.input");
let PhoneUpdateWithWhereUniqueWithoutBorrowerInput = class PhoneUpdateWithWhereUniqueWithoutBorrowerInput {
};
__decorate([
    (0, graphql_1.Field)(() => phone_where_unique_input_1.PhoneWhereUniqueInput, { nullable: false }),
    __metadata("design:type", phone_where_unique_input_1.PhoneWhereUniqueInput)
], PhoneUpdateWithWhereUniqueWithoutBorrowerInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_update_without_borrower_input_1.PhoneUpdateWithoutBorrowerInput, { nullable: false }),
    __metadata("design:type", phone_update_without_borrower_input_1.PhoneUpdateWithoutBorrowerInput)
], PhoneUpdateWithWhereUniqueWithoutBorrowerInput.prototype, "data", void 0);
PhoneUpdateWithWhereUniqueWithoutBorrowerInput = __decorate([
    (0, graphql_2.InputType)()
], PhoneUpdateWithWhereUniqueWithoutBorrowerInput);
exports.PhoneUpdateWithWhereUniqueWithoutBorrowerInput = PhoneUpdateWithWhereUniqueWithoutBorrowerInput;
//# sourceMappingURL=phone-update-with-where-unique-without-borrower.input.js.map