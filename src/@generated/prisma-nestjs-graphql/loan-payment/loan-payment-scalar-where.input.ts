import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class LoanPaymentScalarWhereInput {

    @Field(() => [LoanPaymentScalarWhereInput], {nullable:true})
    AND?: Array<LoanPaymentScalarWhereInput>;

    @Field(() => [LoanPaymentScalarWhereInput], {nullable:true})
    OR?: Array<LoanPaymentScalarWhereInput>;

    @Field(() => [LoanPaymentScalarWhereInput], {nullable:true})
    NOT?: Array<LoanPaymentScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    amount?: DecimalFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    comments?: StringNullableFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    loanId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    employeeId?: StringFilter;
}
