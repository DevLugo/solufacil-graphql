import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractCreateWithoutDocumentsInput } from './contract-create-without-documents.input';

@InputType()
export class ContractCreateOrConnectWithoutDocumentsInput {

    @Field(() => ContractWhereUniqueInput, {nullable:false})
    where!: ContractWhereUniqueInput;

    @Field(() => ContractCreateWithoutDocumentsInput, {nullable:false})
    create!: ContractCreateWithoutDocumentsInput;
}
