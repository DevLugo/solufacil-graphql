import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentCreateManyBorrowerInput } from './document-create-many-borrower.input';

@InputType()
export class DocumentCreateManyBorrowerInputEnvelope {

    @Field(() => [DocumentCreateManyBorrowerInput], {nullable:false})
    data!: Array<DocumentCreateManyBorrowerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
