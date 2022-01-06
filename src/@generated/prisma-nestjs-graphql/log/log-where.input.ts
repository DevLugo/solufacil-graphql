import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { SystemSectionRelationFilter } from '../system-section/system-section-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class LogWhereInput {

    @Field(() => [LogWhereInput], {nullable:true})
    AND?: Array<LogWhereInput>;

    @Field(() => [LogWhereInput], {nullable:true})
    OR?: Array<LogWhereInput>;

    @Field(() => [LogWhereInput], {nullable:true})
    NOT?: Array<LogWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => SystemSectionRelationFilter, {nullable:true})
    section?: SystemSectionRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    requestBody?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    requestType?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    deviceType?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    systemSectionId?: StringFilter;
}
