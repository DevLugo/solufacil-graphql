import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentCreateWithoutAvalInput } from './document-create-without-aval.input';

@InputType()
export class DocumentCreateOrConnectWithoutAvalInput {

    @Field(() => DocumentWhereUniqueInput, {nullable:false})
    where!: DocumentWhereUniqueInput;

    @Field(() => DocumentCreateWithoutAvalInput, {nullable:false})
    create!: DocumentCreateWithoutAvalInput;
}
