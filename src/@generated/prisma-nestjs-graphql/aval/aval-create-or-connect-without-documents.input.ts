import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvalWhereUniqueInput } from './aval-where-unique.input';
import { AvalCreateWithoutDocumentsInput } from './aval-create-without-documents.input';

@InputType()
export class AvalCreateOrConnectWithoutDocumentsInput {

    @Field(() => AvalWhereUniqueInput, {nullable:false})
    where!: AvalWhereUniqueInput;

    @Field(() => AvalCreateWithoutDocumentsInput, {nullable:false})
    create!: AvalCreateWithoutDocumentsInput;
}
