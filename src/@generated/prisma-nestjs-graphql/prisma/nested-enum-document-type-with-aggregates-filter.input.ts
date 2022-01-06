import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentType } from './document-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDocumentTypeFilter } from './nested-enum-document-type-filter.input';

@InputType()
export class NestedEnumDocumentTypeWithAggregatesFilter {

    @Field(() => DocumentType, {nullable:true})
    equals?: keyof typeof DocumentType;

    @Field(() => [DocumentType], {nullable:true})
    in?: Array<keyof typeof DocumentType>;

    @Field(() => [DocumentType], {nullable:true})
    notIn?: Array<keyof typeof DocumentType>;

    @Field(() => NestedEnumDocumentTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDocumentTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDocumentTypeFilter, {nullable:true})
    _min?: NestedEnumDocumentTypeFilter;

    @Field(() => NestedEnumDocumentTypeFilter, {nullable:true})
    _max?: NestedEnumDocumentTypeFilter;
}
