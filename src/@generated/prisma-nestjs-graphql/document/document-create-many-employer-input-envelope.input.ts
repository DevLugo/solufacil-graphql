import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentCreateManyEmployerInput } from './document-create-many-employer.input';

@InputType()
export class DocumentCreateManyEmployerInputEnvelope {

    @Field(() => [DocumentCreateManyEmployerInput], {nullable:false})
    data!: Array<DocumentCreateManyEmployerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
