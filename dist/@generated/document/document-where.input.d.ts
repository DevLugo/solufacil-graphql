import { StringFilter } from '../prisma/string-filter.input';
import { EnumDocumentTypeFilter } from '../prisma/enum-document-type-filter.input';
import { BorrowerRelationFilter } from '../borrower/borrower-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EmployeeRelationFilter } from '../employee/employee-relation-filter.input';
import { AvalRelationFilter } from '../aval/aval-relation-filter.input';
import { ContractRelationFilter } from '../contract/contract-relation-filter.input';
export declare class DocumentWhereInput {
    AND?: Array<DocumentWhereInput>;
    OR?: Array<DocumentWhereInput>;
    NOT?: Array<DocumentWhereInput>;
    id?: StringFilter;
    type?: EnumDocumentTypeFilter;
    borrower?: BorrowerRelationFilter;
    borrowerId?: StringNullableFilter;
    employee?: EmployeeRelationFilter;
    aval?: AvalRelationFilter;
    avalId?: StringNullableFilter;
    contract?: ContractRelationFilter;
    contractId?: StringNullableFilter;
    employeeId?: StringNullableFilter;
}
