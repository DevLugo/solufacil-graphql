import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerUpdateWithoutDocumentsInput } from './borrower-update-without-documents.input';
import { BorrowerCreateWithoutDocumentsInput } from './borrower-create-without-documents.input';

@InputType()
export class BorrowerUpsertWithoutDocumentsInput {

    @Field(() => BorrowerUpdateWithoutDocumentsInput, {nullable:false})
    update!: BorrowerUpdateWithoutDocumentsInput;

    @Field(() => BorrowerCreateWithoutDocumentsInput, {nullable:false})
    create!: BorrowerCreateWithoutDocumentsInput;
}
