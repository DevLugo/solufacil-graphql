import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumDocumentTypeFilter } from '../prisma/enum-document-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class DocumentScalarWhereInput {

    @Field(() => [DocumentScalarWhereInput], {nullable:true})
    AND?: Array<DocumentScalarWhereInput>;

    @Field(() => [DocumentScalarWhereInput], {nullable:true})
    OR?: Array<DocumentScalarWhereInput>;

    @Field(() => [DocumentScalarWhereInput], {nullable:true})
    NOT?: Array<DocumentScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumDocumentTypeFilter, {nullable:true})
    type?: EnumDocumentTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    borrowerId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    avalId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    contractId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    employeeId?: StringNullableFilter;
}
