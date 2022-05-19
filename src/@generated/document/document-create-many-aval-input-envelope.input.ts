import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentCreateManyAvalInput } from './document-create-many-aval.input';

@InputType()
export class DocumentCreateManyAvalInputEnvelope {

    @Field(() => [DocumentCreateManyAvalInput], {nullable:false})
    data!: Array<DocumentCreateManyAvalInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
