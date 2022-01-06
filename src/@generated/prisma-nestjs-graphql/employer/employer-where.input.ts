import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumEmployeesTypesFilter } from '../prisma/enum-employees-types-filter.input';
import { PhoneListRelationFilter } from '../phone/phone-list-relation-filter.input';
import { DocumentListRelationFilter } from '../document/document-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ContractListRelationFilter } from '../contract/contract-list-relation-filter.input';

@InputType()
export class EmployerWhereInput {

    @Field(() => [EmployerWhereInput], {nullable:true})
    AND?: Array<EmployerWhereInput>;

    @Field(() => [EmployerWhereInput], {nullable:true})
    OR?: Array<EmployerWhereInput>;

    @Field(() => [EmployerWhereInput], {nullable:true})
    NOT?: Array<EmployerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumEmployeesTypesFilter, {nullable:true})
    type?: EnumEmployeesTypesFilter;

    @Field(() => PhoneListRelationFilter, {nullable:true})
    phones?: PhoneListRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    fullName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    firstName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    lastName?: StringFilter;

    @Field(() => DocumentListRelationFilter, {nullable:true})
    documents?: DocumentListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ContractListRelationFilter, {nullable:true})
    Contract?: ContractListRelationFilter;
}
