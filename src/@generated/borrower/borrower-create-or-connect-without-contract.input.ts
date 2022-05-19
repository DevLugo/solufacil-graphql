import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { BorrowerCreateWithoutContractInput } from './borrower-create-without-contract.input';

@InputType()
export class BorrowerCreateOrConnectWithoutContractInput {

    @Field(() => BorrowerWhereUniqueInput, {nullable:false})
    where!: BorrowerWhereUniqueInput;

    @Field(() => BorrowerCreateWithoutContractInput, {nullable:false})
    create!: BorrowerCreateWithoutContractInput;
}
