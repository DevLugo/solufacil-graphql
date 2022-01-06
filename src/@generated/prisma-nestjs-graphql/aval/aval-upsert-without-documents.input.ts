import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvalUpdateWithoutDocumentsInput } from './aval-update-without-documents.input';
import { AvalCreateWithoutDocumentsInput } from './aval-create-without-documents.input';

@InputType()
export class AvalUpsertWithoutDocumentsInput {

    @Field(() => AvalUpdateWithoutDocumentsInput, {nullable:false})
    update!: AvalUpdateWithoutDocumentsInput;

    @Field(() => AvalCreateWithoutDocumentsInput, {nullable:false})
    create!: AvalCreateWithoutDocumentsInput;
}
