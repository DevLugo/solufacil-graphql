import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumDocumentTypeWithAggregatesFilter } from '../prisma/enum-document-type-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class DocumentScalarWhereWithAggregatesInput {

    @Field(() => [DocumentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DocumentScalarWhereWithAggregatesInput>;

    @Field(() => [DocumentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DocumentScalarWhereWithAggregatesInput>;

    @Field(() => [DocumentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DocumentScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumDocumentTypeWithAggregatesFilter, {nullable:true})
    type?: EnumDocumentTypeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    borrowerId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    avalId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    contractId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    employeeId?: StringNullableWithAggregatesFilter;
}
