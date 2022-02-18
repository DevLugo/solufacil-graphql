import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { EnumPaymentStateFilter } from '../prisma/enum-payment-state-filter.input';
import { HideField } from '@nestjs/graphql';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class PaymentScheduleScalarWhereInput {

    @Field(() => [PaymentScheduleScalarWhereInput], {nullable:true})
    AND?: Array<PaymentScheduleScalarWhereInput>;

    @Field(() => [PaymentScheduleScalarWhereInput], {nullable:true})
    OR?: Array<PaymentScheduleScalarWhereInput>;

    @Field(() => [PaymentScheduleScalarWhereInput], {nullable:true})
    NOT?: Array<PaymentScheduleScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    numeration?: IntFilter;

    @Field(() => DecimalFilter, {nullable:true})
    amountToPay?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    paidAmount?: DecimalFilter;

    @HideField()
    status?: EnumPaymentStateFilter;

    @Field(() => BoolFilter, {nullable:true})
    delayed?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    dueDate?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    details?: StringNullableFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    loanId?: StringFilter;
}
