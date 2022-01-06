import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvalWhereUniqueInput } from './aval-where-unique.input';
import { AvalCreateWithoutPhonesInput } from './aval-create-without-phones.input';

@InputType()
export class AvalCreateOrConnectWithoutPhonesInput {

    @Field(() => AvalWhereUniqueInput, {nullable:false})
    where!: AvalWhereUniqueInput;

    @Field(() => AvalCreateWithoutPhonesInput, {nullable:false})
    create!: AvalCreateWithoutPhonesInput;
}
