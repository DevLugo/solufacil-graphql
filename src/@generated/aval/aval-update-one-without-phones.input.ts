import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvalCreateWithoutPhonesInput } from './aval-create-without-phones.input';
import { AvalCreateOrConnectWithoutPhonesInput } from './aval-create-or-connect-without-phones.input';
import { AvalUpsertWithoutPhonesInput } from './aval-upsert-without-phones.input';
import { AvalWhereUniqueInput } from './aval-where-unique.input';
import { AvalUpdateWithoutPhonesInput } from './aval-update-without-phones.input';

@InputType()
export class AvalUpdateOneWithoutPhonesInput {

    @Field(() => AvalCreateWithoutPhonesInput, {nullable:true})
    create?: AvalCreateWithoutPhonesInput;

    @Field(() => AvalCreateOrConnectWithoutPhonesInput, {nullable:true})
    connectOrCreate?: AvalCreateOrConnectWithoutPhonesInput;

    @Field(() => AvalUpsertWithoutPhonesInput, {nullable:true})
    upsert?: AvalUpsertWithoutPhonesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AvalWhereUniqueInput, {nullable:true})
    connect?: AvalWhereUniqueInput;

    @Field(() => AvalUpdateWithoutPhonesInput, {nullable:true})
    update?: AvalUpdateWithoutPhonesInput;
}
