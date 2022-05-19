import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class LocalScalarWhereInput {

    @Field(() => [LocalScalarWhereInput], {nullable:true})
    AND?: Array<LocalScalarWhereInput>;

    @Field(() => [LocalScalarWhereInput], {nullable:true})
    OR?: Array<LocalScalarWhereInput>;

    @Field(() => [LocalScalarWhereInput], {nullable:true})
    NOT?: Array<LocalScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    borrowerId?: StringFilter;
}
