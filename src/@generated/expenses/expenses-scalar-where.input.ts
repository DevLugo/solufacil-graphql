import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { EnumPaymentStateFilter } from '../prisma/enum-payment-state-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ExpensesScalarWhereInput {

    @Field(() => [ExpensesScalarWhereInput], {nullable:true})
    AND?: Array<ExpensesScalarWhereInput>;

    @Field(() => [ExpensesScalarWhereInput], {nullable:true})
    OR?: Array<ExpensesScalarWhereInput>;

    @Field(() => [ExpensesScalarWhereInput], {nullable:true})
    NOT?: Array<ExpensesScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DecimalFilter, {nullable:true})
    amountToPay?: DecimalFilter;

    @Field(() => EnumPaymentStateFilter, {nullable:true})
    status?: EnumPaymentStateFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    dueDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    payedAt?: DateTimeFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    employeeId?: StringFilter;
}
