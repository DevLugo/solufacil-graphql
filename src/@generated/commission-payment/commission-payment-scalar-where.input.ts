import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumCommissionPaymentStatusFilter } from '../prisma/enum-commission-payment-status-filter.input';

@InputType()
export class CommissionPaymentScalarWhereInput {

    @Field(() => [CommissionPaymentScalarWhereInput], {nullable:true})
    AND?: Array<CommissionPaymentScalarWhereInput>;

    @Field(() => [CommissionPaymentScalarWhereInput], {nullable:true})
    OR?: Array<CommissionPaymentScalarWhereInput>;

    @Field(() => [CommissionPaymentScalarWhereInput], {nullable:true})
    NOT?: Array<CommissionPaymentScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    amount?: DecimalFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    loanId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    paymentScheduleId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    employeeId?: StringFilter;

    @Field(() => EnumCommissionPaymentStatusFilter, {nullable:true})
    status?: EnumCommissionPaymentStatusFilter;
}
