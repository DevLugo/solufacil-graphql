import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentCreateWithoutContractInput } from './document-create-without-contract.input';
import { DocumentCreateOrConnectWithoutContractInput } from './document-create-or-connect-without-contract.input';
import { DocumentCreateManyContractInputEnvelope } from './document-create-many-contract-input-envelope.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';

@InputType()
export class DocumentCreateNestedManyWithoutContractInput {

    @Field(() => [DocumentCreateWithoutContractInput], {nullable:true})
    create?: Array<DocumentCreateWithoutContractInput>;

    @Field(() => [DocumentCreateOrConnectWithoutContractInput], {nullable:true})
    connectOrCreate?: Array<DocumentCreateOrConnectWithoutContractInput>;

    @Field(() => DocumentCreateManyContractInputEnvelope, {nullable:true})
    createMany?: DocumentCreateManyContractInputEnvelope;

    @Field(() => [DocumentWhereUniqueInput], {nullable:true})
    connect?: Array<DocumentWhereUniqueInput>;
}
