import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { EnumPaymentStateWithAggregatesFilter } from '../prisma/enum-payment-state-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class LoanPaymentScalarWhereWithAggregatesInput {

    @Field(() => [LoanPaymentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LoanPaymentScalarWhereWithAggregatesInput>;

    @Field(() => [LoanPaymentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LoanPaymentScalarWhereWithAggregatesInput>;

    @Field(() => [LoanPaymentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LoanPaymentScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    numeration?: IntWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    amount?: DecimalWithAggregatesFilter;

    @HideField()
    status?: EnumPaymentStateWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    paidDate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    dueDate?: DateTimeWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    loanId?: StringNullableWithAggregatesFilter;
}
