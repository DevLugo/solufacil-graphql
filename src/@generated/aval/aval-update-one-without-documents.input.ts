import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvalCreateWithoutDocumentsInput } from './aval-create-without-documents.input';
import { AvalCreateOrConnectWithoutDocumentsInput } from './aval-create-or-connect-without-documents.input';
import { AvalUpsertWithoutDocumentsInput } from './aval-upsert-without-documents.input';
import { AvalWhereUniqueInput } from './aval-where-unique.input';
import { AvalUpdateWithoutDocumentsInput } from './aval-update-without-documents.input';

@InputType()
export class AvalUpdateOneWithoutDocumentsInput {

    @Field(() => AvalCreateWithoutDocumentsInput, {nullable:true})
    create?: AvalCreateWithoutDocumentsInput;

    @Field(() => AvalCreateOrConnectWithoutDocumentsInput, {nullable:true})
    connectOrCreate?: AvalCreateOrConnectWithoutDocumentsInput;

    @Field(() => AvalUpsertWithoutDocumentsInput, {nullable:true})
    upsert?: AvalUpsertWithoutDocumentsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AvalWhereUniqueInput, {nullable:true})
    connect?: AvalWhereUniqueInput;

    @Field(() => AvalUpdateWithoutDocumentsInput, {nullable:true})
    update?: AvalUpdateWithoutDocumentsInput;
}
