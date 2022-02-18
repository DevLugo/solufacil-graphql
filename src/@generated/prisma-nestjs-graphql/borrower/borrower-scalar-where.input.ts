import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class BorrowerScalarWhereInput {

    @Field(() => [BorrowerScalarWhereInput], {nullable:true})
    AND?: Array<BorrowerScalarWhereInput>;

    @Field(() => [BorrowerScalarWhereInput], {nullable:true})
    OR?: Array<BorrowerScalarWhereInput>;

    @Field(() => [BorrowerScalarWhereInput], {nullable:true})
    NOT?: Array<BorrowerScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    borrowerId?: StringNullableFilter;
}
