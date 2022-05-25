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
exports.BorrowerCreateNestedOneWithoutLocalInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const borrower_create_without_local_input_1 = require("./borrower-create-without-local.input");
const borrower_create_or_connect_without_local_input_1 = require("./borrower-create-or-connect-without-local.input");
const borrower_where_unique_input_1 = require("./borrower-where-unique.input");
let BorrowerCreateNestedOneWithoutLocalInput = class BorrowerCreateNestedOneWithoutLocalInput {
};
__decorate([
    (0, graphql_1.Field)(() => borrower_create_without_local_input_1.BorrowerCreateWithoutLocalInput, { nullable: true }),
    __metadata("design:type", borrower_create_without_local_input_1.BorrowerCreateWithoutLocalInput)
], BorrowerCreateNestedOneWithoutLocalInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_create_or_connect_without_local_input_1.BorrowerCreateOrConnectWithoutLocalInput, { nullable: true }),
    __metadata("design:type", borrower_create_or_connect_without_local_input_1.BorrowerCreateOrConnectWithoutLocalInput)
], BorrowerCreateNestedOneWithoutLocalInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => borrower_where_unique_input_1.BorrowerWhereUniqueInput, { nullable: true }),
    __metadata("design:type", borrower_where_unique_input_1.BorrowerWhereUniqueInput)
], BorrowerCreateNestedOneWithoutLocalInput.prototype, "connect", void 0);
BorrowerCreateNestedOneWithoutLocalInput = __decorate([
    (0, graphql_2.InputType)()
], BorrowerCreateNestedOneWithoutLocalInput);
exports.BorrowerCreateNestedOneWithoutLocalInput = BorrowerCreateNestedOneWithoutLocalInput;
//# sourceMappingURL=borrower-create-nested-one-without-local.input.js.map