import { StringFilter } from '../prisma/string-filter.input';
import { EnumDocumentTypeFilter } from '../prisma/enum-document-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
export declare class DocumentScalarWhereInput {
    AND?: Array<DocumentScalarWhereInput>;
    OR?: Array<DocumentScalarWhereInput>;
    NOT?: Array<DocumentScalarWhereInput>;
    id?: StringFilter;
    type?: EnumDocumentTypeFilter;
    borrowerId?: StringNullableFilter;
    avalId?: StringNullableFilter;
    contractId?: StringNullableFilter;
    employeeId?: StringNullableFilter;
}
