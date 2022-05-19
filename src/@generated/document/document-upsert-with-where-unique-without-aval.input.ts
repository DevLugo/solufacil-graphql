import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentUpdateWithoutAvalInput } from './document-update-without-aval.input';
import { DocumentCreateWithoutAvalInput } from './document-create-without-aval.input';

@InputType()
export class DocumentUpsertWithWhereUniqueWithoutAvalInput {

    @Field(() => DocumentWhereUniqueInput, {nullable:false})
    where!: DocumentWhereUniqueInput;

    @Field(() => DocumentUpdateWithoutAvalInput, {nullable:false})
    update!: DocumentUpdateWithoutAvalInput;

    @Field(() => DocumentCreateWithoutAvalInput, {nullable:false})
    create!: DocumentCreateWithoutAvalInput;
}
