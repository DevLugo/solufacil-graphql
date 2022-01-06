import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { LogListRelationFilter } from '../log/log-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SystemSectionWhereInput {

    @Field(() => [SystemSectionWhereInput], {nullable:true})
    AND?: Array<SystemSectionWhereInput>;

    @Field(() => [SystemSectionWhereInput], {nullable:true})
    OR?: Array<SystemSectionWhereInput>;

    @Field(() => [SystemSectionWhereInput], {nullable:true})
    NOT?: Array<SystemSectionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => LogListRelationFilter, {nullable:true})
    logs?: LogListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
