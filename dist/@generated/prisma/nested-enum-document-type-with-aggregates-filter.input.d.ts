import { DocumentType } from './document-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDocumentTypeFilter } from './nested-enum-document-type-filter.input';
export declare class NestedEnumDocumentTypeWithAggregatesFilter {
    equals?: keyof typeof DocumentType;
    in?: Array<keyof typeof DocumentType>;
    notIn?: Array<keyof typeof DocumentType>;
    not?: NestedEnumDocumentTypeWithAggregatesFilter;
    _count?: NestedIntFilter;
    _min?: NestedEnumDocumentTypeFilter;
    _max?: NestedEnumDocumentTypeFilter;
}
