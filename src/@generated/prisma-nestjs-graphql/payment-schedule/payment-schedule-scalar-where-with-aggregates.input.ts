import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { EnumPaymentStateWithAggregatesFilter } from '../prisma/enum-payment-state-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class PaymentScheduleScalarWhereWithAggregatesInput {

    @Field(() => [PaymentScheduleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PaymentScheduleScalarWhereWithAggregatesInput>;

    @Field(() => [PaymentScheduleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PaymentScheduleScalarWhereWithAggregatesInput>;

    @Field(() => [PaymentScheduleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PaymentScheduleScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    numeration?: IntWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    amountToPay?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    paidAmount?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    returnToCapital?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    profit?: DecimalWithAggregatesFilter;

    @HideField()
    status?: EnumPaymentStateWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    delayed?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    dueDate?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    details?: StringNullableWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    loanId?: StringWithAggregatesFilter;
}
