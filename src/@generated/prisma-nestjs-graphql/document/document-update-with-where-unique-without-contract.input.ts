import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentUpdateWithoutContractInput } from './document-update-without-contract.input';

@InputType()
export class DocumentUpdateWithWhereUniqueWithoutContractInput {

    @Field(() => DocumentWhereUniqueInput, {nullable:false})
    where!: DocumentWhereUniqueInput;

    @Field(() => DocumentUpdateWithoutContractInput, {nullable:false})
    data!: DocumentUpdateWithoutContractInput;
}
