import { DocumentType } from './document-type.enum';
import { NestedEnumDocumentTypeFilter } from './nested-enum-document-type-filter.input';
export declare class EnumDocumentTypeFilter {
    equals?: keyof typeof DocumentType;
    in?: Array<keyof typeof DocumentType>;
    notIn?: Array<keyof typeof DocumentType>;
    not?: NestedEnumDocumentTypeFilter;
}
