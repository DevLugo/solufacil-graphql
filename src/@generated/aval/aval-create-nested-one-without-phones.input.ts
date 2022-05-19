import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvalCreateWithoutPhonesInput } from './aval-create-without-phones.input';
import { AvalCreateOrConnectWithoutPhonesInput } from './aval-create-or-connect-without-phones.input';
import { AvalWhereUniqueInput } from './aval-where-unique.input';

@InputType()
export class AvalCreateNestedOneWithoutPhonesInput {

    @Field(() => AvalCreateWithoutPhonesInput, {nullable:true})
    create?: AvalCreateWithoutPhonesInput;

    @Field(() => AvalCreateOrConnectWithoutPhonesInput, {nullable:true})
    connectOrCreate?: AvalCreateOrConnectWithoutPhonesInput;

    @Field(() => AvalWhereUniqueInput, {nullable:true})
    connect?: AvalWhereUniqueInput;
}
