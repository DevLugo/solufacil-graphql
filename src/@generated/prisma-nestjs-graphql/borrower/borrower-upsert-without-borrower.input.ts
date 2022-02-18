import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerUpdateWithoutBorrowerInput } from './borrower-update-without-borrower.input';
import { BorrowerCreateWithoutBorrowerInput } from './borrower-create-without-borrower.input';

@InputType()
export class BorrowerUpsertWithoutBorrowerInput {

    @Field(() => BorrowerUpdateWithoutBorrowerInput, {nullable:false})
    update!: BorrowerUpdateWithoutBorrowerInput;

    @Field(() => BorrowerCreateWithoutBorrowerInput, {nullable:false})
    create!: BorrowerCreateWithoutBorrowerInput;
}
