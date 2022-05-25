import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
export declare class ContractScalarWhereInput {
    AND?: Array<ContractScalarWhereInput>;
    OR?: Array<ContractScalarWhereInput>;
    NOT?: Array<ContractScalarWhereInput>;
    id?: StringFilter;
    borrowerId?: StringFilter;
    createdAt?: DateTimeFilter;
    dueDate?: DateTimeFilter;
    signDate?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    contractTypeId?: StringFilter;
    loanLeadId?: StringFilter;
    employeeId?: StringFilter;
}
