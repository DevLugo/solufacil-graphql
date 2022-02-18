import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { BorrowerCreateWithoutBorrowerInput } from './borrower-create-without-borrower.input';

@InputType()
export class BorrowerCreateOrConnectWithoutBorrowerInput {

    @Field(() => BorrowerWhereUniqueInput, {nullable:false})
    where!: BorrowerWhereUniqueInput;

    @Field(() => BorrowerCreateWithoutBorrowerInput, {nullable:false})
    create!: BorrowerCreateWithoutBorrowerInput;
}
