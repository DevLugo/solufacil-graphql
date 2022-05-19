import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class LogScalarWhereWithAggregatesInput {

    @Field(() => [LogScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LogScalarWhereWithAggregatesInput>;

    @Field(() => [LogScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LogScalarWhereWithAggregatesInput>;

    @Field(() => [LogScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LogScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    requestBody?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    requestType?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    deviceType?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    systemSectionId?: StringWithAggregatesFilter;
}
