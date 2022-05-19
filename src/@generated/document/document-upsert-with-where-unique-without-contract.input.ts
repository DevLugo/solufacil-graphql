import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentUpdateWithoutContractInput } from './document-update-without-contract.input';
import { DocumentCreateWithoutContractInput } from './document-create-without-contract.input';

@InputType()
export class DocumentUpsertWithWhereUniqueWithoutContractInput {

    @Field(() => DocumentWhereUniqueInput, {nullable:false})
    where!: DocumentWhereUniqueInput;

    @Field(() => DocumentUpdateWithoutContractInput, {nullable:false})
    update!: DocumentUpdateWithoutContractInput;

    @Field(() => DocumentCreateWithoutContractInput, {nullable:false})
    create!: DocumentCreateWithoutContractInput;
}
