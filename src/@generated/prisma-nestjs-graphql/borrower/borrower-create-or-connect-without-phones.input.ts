import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { BorrowerCreateWithoutPhonesInput } from './borrower-create-without-phones.input';

@InputType()
export class BorrowerCreateOrConnectWithoutPhonesInput {

    @Field(() => BorrowerWhereUniqueInput, {nullable:false})
    where!: BorrowerWhereUniqueInput;

    @Field(() => BorrowerCreateWithoutPhonesInput, {nullable:false})
    create!: BorrowerCreateWithoutPhonesInput;
}
