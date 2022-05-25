import { DocumentType } from './document-type.enum';
export declare class NestedEnumDocumentTypeFilter {
    equals?: keyof typeof DocumentType;
    in?: Array<keyof typeof DocumentType>;
    notIn?: Array<keyof typeof DocumentType>;
    not?: NestedEnumDocumentTypeFilter;
}
