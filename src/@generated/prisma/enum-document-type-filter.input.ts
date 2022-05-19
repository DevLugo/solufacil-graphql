import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentType } from './document-type.enum';
import { NestedEnumDocumentTypeFilter } from './nested-enum-document-type-filter.input';

@InputType()
export class EnumDocumentTypeFilter {

    @Field(() => DocumentType, {nullable:true})
    equals?: keyof typeof DocumentType;

    @Field(() => [DocumentType], {nullable:true})
    in?: Array<keyof typeof DocumentType>;

    @Field(() => [DocumentType], {nullable:true})
    notIn?: Array<keyof typeof DocumentType>;

    @Field(() => NestedEnumDocumentTypeFilter, {nullable:true})
    not?: NestedEnumDocumentTypeFilter;
}
