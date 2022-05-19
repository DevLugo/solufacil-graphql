import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumDocumentTypeFilter } from '../prisma/enum-document-type-filter.input';
import { BorrowerRelationFilter } from '../borrower/borrower-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EmployeeRelationFilter } from '../employee/employee-relation-filter.input';
import { AvalRelationFilter } from '../aval/aval-relation-filter.input';
import { ContractRelationFilter } from '../contract/contract-relation-filter.input';

@InputType()
export class DocumentWhereInput {

    @Field(() => [DocumentWhereInput], {nullable:true})
    AND?: Array<DocumentWhereInput>;

    @Field(() => [DocumentWhereInput], {nullable:true})
    OR?: Array<DocumentWhereInput>;

    @Field(() => [DocumentWhereInput], {nullable:true})
    NOT?: Array<DocumentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumDocumentTypeFilter, {nullable:true})
    type?: EnumDocumentTypeFilter;

    @Field(() => BorrowerRelationFilter, {nullable:true})
    borrower?: BorrowerRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    borrowerId?: StringNullableFilter;

    @Field(() => EmployeeRelationFilter, {nullable:true})
    employee?: EmployeeRelationFilter;

    @Field(() => AvalRelationFilter, {nullable:true})
    aval?: AvalRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avalId?: StringNullableFilter;

    @Field(() => ContractRelationFilter, {nullable:true})
    contract?: ContractRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    contractId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    employeeId?: StringNullableFilter;
}
