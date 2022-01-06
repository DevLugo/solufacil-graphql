import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { Prisma } from '@prisma/client';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ContractScalarWhereWithAggregatesInput {

    @Field(() => [ContractScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ContractScalarWhereWithAggregatesInput>;

    @Field(() => [ContractScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ContractScalarWhereWithAggregatesInput>;

    @Field(() => [ContractScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ContractScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    amount?: Prisma.Decimal;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    borrowerId?: StringNullableWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    employeeId?: StringNullableWithAggregatesFilter;
}
