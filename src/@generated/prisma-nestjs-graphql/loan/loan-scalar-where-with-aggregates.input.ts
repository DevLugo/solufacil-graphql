import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumLoanStateWithAggregatesFilter } from '../prisma/enum-loan-state-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class LoanScalarWhereWithAggregatesInput {

    @Field(() => [LoanScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LoanScalarWhereWithAggregatesInput>;

    @Field(() => [LoanScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LoanScalarWhereWithAggregatesInput>;

    @Field(() => [LoanScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LoanScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @HideField()
    status?: EnumLoanStateWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    weeklyPaymentAmount?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    amountToPay?: DecimalWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    signDate?: DateTimeWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    contractId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    loantypeId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    employeeId?: StringWithAggregatesFilter;
}
