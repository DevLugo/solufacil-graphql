import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class LogScalarWhereInput {

    @Field(() => [LogScalarWhereInput], {nullable:true})
    AND?: Array<LogScalarWhereInput>;

    @Field(() => [LogScalarWhereInput], {nullable:true})
    OR?: Array<LogScalarWhereInput>;

    @Field(() => [LogScalarWhereInput], {nullable:true})
    NOT?: Array<LogScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
