import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerUpdateWithoutPhonesInput } from './borrower-update-without-phones.input';
import { BorrowerCreateWithoutPhonesInput } from './borrower-create-without-phones.input';

@InputType()
export class BorrowerUpsertWithoutPhonesInput {

    @Field(() => BorrowerUpdateWithoutPhonesInput, {nullable:false})
    update!: BorrowerUpdateWithoutPhonesInput;

    @Field(() => BorrowerCreateWithoutPhonesInput, {nullable:false})
    create!: BorrowerCreateWithoutPhonesInput;
}
