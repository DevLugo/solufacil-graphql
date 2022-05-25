import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { LoanListRelationFilter } from '../loan/loan-list-relation-filter.input';
import { ComissionPaymentConfigurationListRelationFilter } from '../comission-payment-configuration/comission-payment-configuration-list-relation-filter.input';
export declare class LoantypeWhereInput {
    AND?: Array<LoantypeWhereInput>;
    OR?: Array<LoantypeWhereInput>;
    NOT?: Array<LoantypeWhereInput>;
    id?: StringFilter;
    name?: StringFilter;
    weekDuration?: IntFilter;
    rate?: FloatFilter;
    overdueRate?: FloatFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    Loan?: LoanListRelationFilter;
    ComissionPaymentConfiguration?: ComissionPaymentConfigurationListRelationFilter;
}
