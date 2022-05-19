import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumCommissionPaymentStatusWithAggregatesFilter } from '../prisma/enum-commission-payment-status-with-aggregates-filter.input';

@InputType()
export class CommissionPaymentScalarWhereWithAggregatesInput {

    @Field(() => [CommissionPaymentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CommissionPaymentScalarWhereWithAggregatesInput>;

    @Field(() => [CommissionPaymentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CommissionPaymentScalarWhereWithAggregatesInput>;

    @Field(() => [CommissionPaymentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CommissionPaymentScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    amount?: DecimalWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    loanId?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    paymentScheduleId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    employeeId?: StringWithAggregatesFilter;

    @Field(() => EnumCommissionPaymentStatusWithAggregatesFilter, {nullable:true})
    status?: EnumCommissionPaymentStatusWithAggregatesFilter;
}
