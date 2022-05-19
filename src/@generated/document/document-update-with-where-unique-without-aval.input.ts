import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentUpdateWithoutAvalInput } from './document-update-without-aval.input';

@InputType()
export class DocumentUpdateWithWhereUniqueWithoutAvalInput {

    @Field(() => DocumentWhereUniqueInput, {nullable:false})
    where!: DocumentWhereUniqueInput;

    @Field(() => DocumentUpdateWithoutAvalInput, {nullable:false})
    data!: DocumentUpdateWithoutAvalInput;
}
