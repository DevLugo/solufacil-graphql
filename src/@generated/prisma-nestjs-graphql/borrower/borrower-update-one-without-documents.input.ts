import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerCreateWithoutDocumentsInput } from './borrower-create-without-documents.input';
import { BorrowerCreateOrConnectWithoutDocumentsInput } from './borrower-create-or-connect-without-documents.input';
import { BorrowerUpsertWithoutDocumentsInput } from './borrower-upsert-without-documents.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { BorrowerUpdateWithoutDocumentsInput } from './borrower-update-without-documents.input';

@InputType()
export class BorrowerUpdateOneWithoutDocumentsInput {

    @Field(() => BorrowerCreateWithoutDocumentsInput, {nullable:true})
    create?: BorrowerCreateWithoutDocumentsInput;

    @Field(() => BorrowerCreateOrConnectWithoutDocumentsInput, {nullable:true})
    connectOrCreate?: BorrowerCreateOrConnectWithoutDocumentsInput;

    @Field(() => BorrowerUpsertWithoutDocumentsInput, {nullable:true})
    upsert?: BorrowerUpsertWithoutDocumentsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => BorrowerWhereUniqueInput, {nullable:true})
    connect?: BorrowerWhereUniqueInput;

    @Field(() => BorrowerUpdateWithoutDocumentsInput, {nullable:true})
    update?: BorrowerUpdateWithoutDocumentsInput;
}
