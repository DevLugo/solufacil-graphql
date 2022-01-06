import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerCreateWithoutDocumentsInput } from './borrower-create-without-documents.input';
import { BorrowerCreateOrConnectWithoutDocumentsInput } from './borrower-create-or-connect-without-documents.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';

@InputType()
export class BorrowerCreateNestedOneWithoutDocumentsInput {

    @Field(() => BorrowerCreateWithoutDocumentsInput, {nullable:true})
    create?: BorrowerCreateWithoutDocumentsInput;

    @Field(() => BorrowerCreateOrConnectWithoutDocumentsInput, {nullable:true})
    connectOrCreate?: BorrowerCreateOrConnectWithoutDocumentsInput;

    @Field(() => BorrowerWhereUniqueInput, {nullable:true})
    connect?: BorrowerWhereUniqueInput;
}
