import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { EnumPaymentStateFilter } from '../prisma/enum-payment-state-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EmployeeRelationFilter } from '../employee/employee-relation-filter.input';
import { HideField } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ExpensesWhereInput {

    @Field(() => [ExpensesWhereInput], {nullable:true})
    AND?: Array<ExpensesWhereInput>;

    @Field(() => [ExpensesWhereInput], {nullable:true})
    OR?: Array<ExpensesWhereInput>;

    @Field(() => [ExpensesWhereInput], {nullable:true})
    NOT?: Array<ExpensesWhereInput>;

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

    @Field(() => EmployeeRelationFilter, {nullable:true})
    employee?: EmployeeRelationFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    employeeId?: StringFilter;
}
