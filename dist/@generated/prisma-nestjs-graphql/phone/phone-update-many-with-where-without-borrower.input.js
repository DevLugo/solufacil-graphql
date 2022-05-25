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
exports.PhoneUpdateManyWithWhereWithoutBorrowerInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const phone_scalar_where_input_1 = require("./phone-scalar-where.input");
const phone_update_many_mutation_input_1 = require("./phone-update-many-mutation.input");
let PhoneUpdateManyWithWhereWithoutBorrowerInput = class PhoneUpdateManyWithWhereWithoutBorrowerInput {
};
__decorate([
    (0, graphql_1.Field)(() => phone_scalar_where_input_1.PhoneScalarWhereInput, { nullable: false }),
    __metadata("design:type", phone_scalar_where_input_1.PhoneScalarWhereInput)
], PhoneUpdateManyWithWhereWithoutBorrowerInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => phone_update_many_mutation_input_1.PhoneUpdateManyMutationInput, { nullable: false }),
    __metadata("design:type", phone_update_many_mutation_input_1.PhoneUpdateManyMutationInput)
], PhoneUpdateManyWithWhereWithoutBorrowerInput.prototype, "data", void 0);
PhoneUpdateManyWithWhereWithoutBorrowerInput = __decorate([
    (0, graphql_2.InputType)()
], PhoneUpdateManyWithWhereWithoutBorrowerInput);
exports.PhoneUpdateManyWithWhereWithoutBorrowerInput = PhoneUpdateManyWithWhereWithoutBorrowerInput;
//# sourceMappingURL=phone-update-many-with-where-without-borrower.input.js.map