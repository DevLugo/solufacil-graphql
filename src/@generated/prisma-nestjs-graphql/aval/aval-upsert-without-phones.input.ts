import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvalUpdateWithoutPhonesInput } from './aval-update-without-phones.input';
import { AvalCreateWithoutPhonesInput } from './aval-create-without-phones.input';

@InputType()
export class AvalUpsertWithoutPhonesInput {

    @Field(() => AvalUpdateWithoutPhonesInput, {nullable:false})
    update!: AvalUpdateWithoutPhonesInput;

    @Field(() => AvalCreateWithoutPhonesInput, {nullable:false})
    create!: AvalCreateWithoutPhonesInput;
}
