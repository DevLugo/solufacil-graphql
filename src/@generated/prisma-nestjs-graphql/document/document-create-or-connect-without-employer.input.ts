import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentCreateWithoutEmployerInput } from './document-create-without-employer.input';

@InputType()
export class DocumentCreateOrConnectWithoutEmployerInput {

    @Field(() => DocumentWhereUniqueInput, {nullable:false})
    where!: DocumentWhereUniqueInput;

    @Field(() => DocumentCreateWithoutEmployerInput, {nullable:false})
    create!: DocumentCreateWithoutEmployerInput;
}
