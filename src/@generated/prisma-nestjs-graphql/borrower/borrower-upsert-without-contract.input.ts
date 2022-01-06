import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerUpdateWithoutContractInput } from './borrower-update-without-contract.input';
import { BorrowerCreateWithoutContractInput } from './borrower-create-without-contract.input';

@InputType()
export class BorrowerUpsertWithoutContractInput {

    @Field(() => BorrowerUpdateWithoutContractInput, {nullable:false})
    update!: BorrowerUpdateWithoutContractInput;

    @Field(() => BorrowerCreateWithoutContractInput, {nullable:false})
    create!: BorrowerCreateWithoutContractInput;
}
