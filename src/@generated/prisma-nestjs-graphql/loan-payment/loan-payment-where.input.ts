import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { EnumPaymentStateFilter } from '../prisma/enum-payment-state-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { LoanRelationFilter } from '../loan/loan-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class LoanPaymentWhereInput {

    @Field(() => [LoanPaymentWhereInput], {nullable:true})
    AND?: Array<LoanPaymentWhereInput>;

    @Field(() => [LoanPaymentWhereInput], {nullable:true})
    OR?: Array<LoanPaymentWhereInput>;

    @Field(() => [LoanPaymentWhereInput], {nullable:true})
    NOT?: Array<LoanPaymentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    numeration?: IntFilter;

    @Field(() => DecimalFilter, {nullable:true})
    amount?: DecimalFilter;

    @HideField()
    status?: EnumPaymentStateFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    paidDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    dueDate?: DateTimeFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => LoanRelationFilter, {nullable:true})
    Loan?: LoanRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    loanId?: StringNullableFilter;
}
