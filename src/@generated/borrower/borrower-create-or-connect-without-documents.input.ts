import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { BorrowerCreateWithoutDocumentsInput } from './borrower-create-without-documents.input';

@InputType()
export class BorrowerCreateOrConnectWithoutDocumentsInput {

    @Field(() => BorrowerWhereUniqueInput, {nullable:false})
    where!: BorrowerWhereUniqueInput;

    @Field(() => BorrowerCreateWithoutDocumentsInput, {nullable:false})
    create!: BorrowerCreateWithoutDocumentsInput;
}
