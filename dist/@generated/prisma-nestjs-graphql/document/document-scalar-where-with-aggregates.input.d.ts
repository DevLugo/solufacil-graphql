import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumDocumentTypeWithAggregatesFilter } from '../prisma/enum-document-type-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
export declare class DocumentScalarWhereWithAggregatesInput {
    AND?: Array<DocumentScalarWhereWithAggregatesInput>;
    OR?: Array<DocumentScalarWhereWithAggregatesInput>;
    NOT?: Array<DocumentScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter;
    type?: EnumDocumentTypeWithAggregatesFilter;
    borrowerId?: StringNullableWithAggregatesFilter;
    avalId?: StringNullableWithAggregatesFilter;
    contractId?: StringNullableWithAggregatesFilter;
    employeeId?: StringNullableWithAggregatesFilter;
}
