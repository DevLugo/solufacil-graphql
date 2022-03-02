import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { BorrowerRelationFilter } from '../borrower/borrower-relation-filter.input';

@InputType()
export class LocalWhereInput {

    @Field(() => [LocalWhereInput], {nullable:true})
    AND?: Array<LocalWhereInput>;

    @Field(() => [LocalWhereInput], {nullable:true})
    OR?: Array<LocalWhereInput>;

    @Field(() => [LocalWhereInput], {nullable:true})
    NOT?: Array<LocalWhereInput>;

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

    @Field(() => BorrowerRelationFilter, {nullable:true})
    borrower?: BorrowerRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    borrowerId?: StringFilter;
}
