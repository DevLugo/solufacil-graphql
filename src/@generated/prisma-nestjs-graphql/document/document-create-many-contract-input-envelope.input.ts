import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentCreateManyContractInput } from './document-create-many-contract.input';

@InputType()
export class DocumentCreateManyContractInputEnvelope {

    @Field(() => [DocumentCreateManyContractInput], {nullable:false})
    data!: Array<DocumentCreateManyContractInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
