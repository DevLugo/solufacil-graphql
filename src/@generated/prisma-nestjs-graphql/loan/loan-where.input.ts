import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLoanStateFilter } from '../prisma/enum-loan-state-filter.input';
import { HideField } from '@nestjs/graphql';
import { LoanPaymentListRelationFilter } from '../loan-payment/loan-payment-list-relation-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ContractRelationFilter } from '../contract/contract-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class LoanWhereInput {

    @Field(() => [LoanWhereInput], {nullable:true})
    AND?: Array<LoanWhereInput>;

    @Field(() => [LoanWhereInput], {nullable:true})
    OR?: Array<LoanWhereInput>;

    @Field(() => [LoanWhereInput], {nullable:true})
    NOT?: Array<LoanWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @HideField()
    status?: EnumLoanStateFilter;

    @Field(() => LoanPaymentListRelationFilter, {nullable:true})
    payments?: LoanPaymentListRelationFilter;

    @Field(() => DecimalFilter, {nullable:true})
    amount?: DecimalFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => ContractRelationFilter, {nullable:true})
    Contract?: ContractRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    contractId?: StringNullableFilter;
}
