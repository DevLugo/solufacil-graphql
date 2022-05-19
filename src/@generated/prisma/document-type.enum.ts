import { registerEnumType } from '@nestjs/graphql';

export enum DocumentType {
    DNI = "DNI",
    NSS = "NSS",
    RFC = "RFC",
    SHOP_PHOTO = "SHOP_PHOTO",
    BANC_ACCOUNT = "BANC_ACCOUNT",
    ADDRESS_PROFF = "ADDRESS_PROFF",
    CREDIT_BUREAU = "CREDIT_BUREAU",
    DRIVER_LICENCE = "DRIVER_LICENCE",
    JOB_APPLICATION = "JOB_APPLICATION",
    CONTRACT_EVIDENCE = "CONTRACT_EVIDENCE",
    LETTER_NO_CRIMINAL_RECORD = "LETTER_NO_CRIMINAL_RECORD"
}


registerEnumType(DocumentType, { name: 'DocumentType', description: undefined })
