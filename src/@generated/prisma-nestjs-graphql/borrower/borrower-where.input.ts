import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { PhoneListRelationFilter } from '../phone/phone-list-relation-filter.input';
import { DocumentListRelationFilter } from '../document/document-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { ContractListRelationFilter } from '../contract/contract-list-relation-filter.input';
import { LocalListRelationFilter } from '../local/local-list-relation-filter.input';
@InputType()
export class BorrowerWhereInput {

    @Field(() => [BorrowerWhereInput], {nullable:true})
    AND?: Array<BorrowerWhereInput>;

    @Field(() => [BorrowerWhereInput], {nullable:true})
    OR?: Array<BorrowerWhereInput>;

    @Field(() => [BorrowerWhereInput], {nullable:true})
    NOT?: Array<BorrowerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => PhoneListRelationFilter, {nullable:true})
    phones?: PhoneListRelationFilter;

    @Field(() => DocumentListRelationFilter, {nullable:true})
    documents?: DocumentListRelationFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => ContractListRelationFilter, {nullable:true})
    Contract?: ContractListRelationFilter;

    @Field(() => LocalListRelationFilter, {nullable:true})
    Local?: LocalListRelationFilter;
}
