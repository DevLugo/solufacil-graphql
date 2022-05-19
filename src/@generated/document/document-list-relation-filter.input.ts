import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentWhereInput } from './document-where.input';

@InputType()
export class DocumentListRelationFilter {

    @Field(() => DocumentWhereInput, {nullable:true})
    every?: DocumentWhereInput;

    @Field(() => DocumentWhereInput, {nullable:true})
    some?: DocumentWhereInput;

    @Field(() => DocumentWhereInput, {nullable:true})
    none?: DocumentWhereInput;
}
