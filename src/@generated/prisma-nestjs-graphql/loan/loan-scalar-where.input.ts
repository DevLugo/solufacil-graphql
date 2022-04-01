import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLoanStateFilter } from '../prisma/enum-loan-state-filter.input';
import { HideField } from '@nestjs/graphql';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class LoanScalarWhereInput {

    @Field(() => [LoanScalarWhereInput], {nullable:true})
    AND?: Array<LoanScalarWhereInput>;

    @Field(() => [LoanScalarWhereInput], {nullable:true})
    OR?: Array<LoanScalarWhereInput>;

    @Field(() => [LoanScalarWhereInput], {nullable:true})
    NOT?: Array<LoanScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @HideField()
    status?: EnumLoanStateFilter;

    @Field(() => DecimalFilter, {nullable:true})
    weeklyPaymentAmount?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    amountToPay?: DecimalFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    signDate?: DateTimeFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    contractId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    loantypeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    employeeId?: StringFilter;
}
