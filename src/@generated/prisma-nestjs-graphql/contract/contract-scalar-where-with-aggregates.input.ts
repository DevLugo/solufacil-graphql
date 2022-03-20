import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
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

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    borrowerId?: StringWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    dueDate?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    signDate?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    employeeId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    contractTypeId?: StringWithAggregatesFilter;
}
