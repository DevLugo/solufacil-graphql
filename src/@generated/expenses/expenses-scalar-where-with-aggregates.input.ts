import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { EnumPaymentStateWithAggregatesFilter } from '../prisma/enum-payment-state-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ExpensesScalarWhereWithAggregatesInput {

    @Field(() => [ExpensesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ExpensesScalarWhereWithAggregatesInput>;

    @Field(() => [ExpensesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ExpensesScalarWhereWithAggregatesInput>;

    @Field(() => [ExpensesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ExpensesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    amountToPay?: DecimalWithAggregatesFilter;

    @Field(() => EnumPaymentStateWithAggregatesFilter, {nullable:true})
    status?: EnumPaymentStateWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    dueDate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    payedAt?: DateTimeWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    employeeId?: StringWithAggregatesFilter;
}
