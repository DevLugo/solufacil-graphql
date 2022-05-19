import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PhoneScalarWhereInput {

    @Field(() => [PhoneScalarWhereInput], {nullable:true})
    AND?: Array<PhoneScalarWhereInput>;

    @Field(() => [PhoneScalarWhereInput], {nullable:true})
    OR?: Array<PhoneScalarWhereInput>;

    @Field(() => [PhoneScalarWhereInput], {nullable:true})
    NOT?: Array<PhoneScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    number?: StringFilter;

    @HideField()
    borrowerId?: StringNullableFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avalId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    employeeId?: StringNullableFilter;
}