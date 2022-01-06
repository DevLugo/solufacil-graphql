import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContractCreateWithoutDocumentsInput } from './contract-create-without-documents.input';
import { ContractCreateOrConnectWithoutDocumentsInput } from './contract-create-or-connect-without-documents.input';
import { ContractUpsertWithoutDocumentsInput } from './contract-upsert-without-documents.input';
import { ContractWhereUniqueInput } from './contract-where-unique.input';
import { ContractUpdateWithoutDocumentsInput } from './contract-update-without-documents.input';

@InputType()
export class ContractUpdateOneWithoutDocumentsInput {

    @Field(() => ContractCreateWithoutDocumentsInput, {nullable:true})
    create?: ContractCreateWithoutDocumentsInput;

    @Field(() => ContractCreateOrConnectWithoutDocumentsInput, {nullable:true})
    connectOrCreate?: ContractCreateOrConnectWithoutDocumentsInput;

    @Field(() => ContractUpsertWithoutDocumentsInput, {nullable:true})
    upsert?: ContractUpsertWithoutDocumentsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ContractWhereUniqueInput, {nullable:true})
    connect?: ContractWhereUniqueInput;

    @Field(() => ContractUpdateWithoutDocumentsInput, {nullable:true})
    update?: ContractUpdateWithoutDocumentsInput;
}
