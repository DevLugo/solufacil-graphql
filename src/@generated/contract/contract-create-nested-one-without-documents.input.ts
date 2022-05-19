import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractCreateWithoutDocumentsInput } from './contract-create-without-documents.input';
import { ContractCreateOrConnectWithoutDocumentsInput } from './contract-create-or-connect-without-documents.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';

@InputType()
export class ContractCreateNestedOneWithoutDocumentsInput {

    @Field(() => ContractCreateWithoutDocumentsInput, {nullable:true})
    create?: ContractCreateWithoutDocumentsInput;

    @Field(() => ContractCreateOrConnectWithoutDocumentsInput, {nullable:true})
    connectOrCreate?: ContractCreateOrConnectWithoutDocumentsInput;

    @Field(() => ContractWhereUniqueInput, {nullable:true})
    connect?: ContractWhereUniqueInput;
}
