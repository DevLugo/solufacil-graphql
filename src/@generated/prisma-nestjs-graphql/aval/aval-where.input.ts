import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { PhoneListRelationFilter } from '../phone/phone-list-relation-filter.input';
import { HideField } from '@nestjs/graphql';
import { DocumentListRelationFilter } from '../document/document-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AvalWhereInput {

    @Field(() => [AvalWhereInput], {nullable:true})
    AND?: Array<AvalWhereInput>;

    @Field(() => [AvalWhereInput], {nullable:true})
    OR?: Array<AvalWhereInput>;

    @Field(() => [AvalWhereInput], {nullable:true})
    NOT?: Array<AvalWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => PhoneListRelationFilter, {nullable:true})
    phones?: PhoneListRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @HideField()
    fullName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => DocumentListRelationFilter, {nullable:true})
    documents?: DocumentListRelationFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;
}
