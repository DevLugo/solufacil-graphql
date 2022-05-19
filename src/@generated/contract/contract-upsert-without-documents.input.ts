import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractUpdateWithoutDocumentsInput } from './contract-update-without-documents.input';
import { ContractCreateWithoutDocumentsInput } from './contract-create-without-documents.input';

@InputType()
export class ContractUpsertWithoutDocumentsInput {

    @Field(() => ContractUpdateWithoutDocumentsInput, {nullable:false})
    update!: ContractUpdateWithoutDocumentsInput;

    @Field(() => ContractCreateWithoutDocumentsInput, {nullable:false})
    create!: ContractCreateWithoutDocumentsInput;
}
