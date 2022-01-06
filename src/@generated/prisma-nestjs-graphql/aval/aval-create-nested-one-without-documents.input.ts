import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvalCreateWithoutDocumentsInput } from './aval-create-without-documents.input';
import { AvalCreateOrConnectWithoutDocumentsInput } from './aval-create-or-connect-without-documents.input';
import { AvalWhereUniqueInput } from './aval-where-unique.input';

@InputType()
export class AvalCreateNestedOneWithoutDocumentsInput {

    @Field(() => AvalCreateWithoutDocumentsInput, {nullable:true})
    create?: AvalCreateWithoutDocumentsInput;

    @Field(() => AvalCreateOrConnectWithoutDocumentsInput, {nullable:true})
    connectOrCreate?: AvalCreateOrConnectWithoutDocumentsInput;

    @Field(() => AvalWhereUniqueInput, {nullable:true})
    connect?: AvalWhereUniqueInput;
}
