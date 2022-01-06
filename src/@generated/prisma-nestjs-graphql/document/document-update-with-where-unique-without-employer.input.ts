import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentUpdateWithoutEmployerInput } from './document-update-without-employer.input';

@InputType()
export class DocumentUpdateWithWhereUniqueWithoutEmployerInput {

    @Field(() => DocumentWhereUniqueInput, {nullable:false})
    where!: DocumentWhereUniqueInput;

    @Field(() => DocumentUpdateWithoutEmployerInput, {nullable:false})
    data!: DocumentUpdateWithoutEmployerInput;
}
