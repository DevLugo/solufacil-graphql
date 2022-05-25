"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentType = void 0;
const graphql_1 = require("@nestjs/graphql");
var DocumentType;
(function (DocumentType) {
    DocumentType["DNI"] = "DNI";
    DocumentType["NSS"] = "NSS";
    DocumentType["RFC"] = "RFC";
    DocumentType["SHOP_PHOTO"] = "SHOP_PHOTO";
    DocumentType["BANC_ACCOUNT"] = "BANC_ACCOUNT";
    DocumentType["ADDRESS_PROFF"] = "ADDRESS_PROFF";
    DocumentType["CREDIT_BUREAU"] = "CREDIT_BUREAU";
    DocumentType["DRIVER_LICENCE"] = "DRIVER_LICENCE";
    DocumentType["JOB_APPLICATION"] = "JOB_APPLICATION";
    DocumentType["CONTRACT_EVIDENCE"] = "CONTRACT_EVIDENCE";
    DocumentType["LETTER_NO_CRIMINAL_RECORD"] = "LETTER_NO_CRIMINAL_RECORD";
})(DocumentType = exports.DocumentType || (exports.DocumentType = {}));
(0, graphql_1.registerEnumType)(DocumentType, { name: 'DocumentType', description: undefined });
//# sourceMappingURL=document-type.enum.js.map