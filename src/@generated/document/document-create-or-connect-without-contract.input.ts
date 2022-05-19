import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentCreateWithoutContractInput } from './document-create-without-contract.input';

@InputType()
export class DocumentCreateOrConnectWithoutContractInput {

    @Field(() => DocumentWhereUniqueInput, {nullable:false})
    where!: DocumentWhereUniqueInput;

    @Field(() => DocumentCreateWithoutContractInput, {nullable:false})
    create!: DocumentCreateWithoutContractInput;
}
