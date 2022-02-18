import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerCreateWithoutBorrowerInput } from './borrower-create-without-borrower.input';
import { BorrowerCreateOrConnectWithoutBorrowerInput } from './borrower-create-or-connect-without-borrower.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';

@InputType()
export class BorrowerCreateNestedOneWithoutBorrowerInput {

    @Field(() => BorrowerCreateWithoutBorrowerInput, {nullable:true})
    create?: BorrowerCreateWithoutBorrowerInput;

    @Field(() => BorrowerCreateOrConnectWithoutBorrowerInput, {nullable:true})
    connectOrCreate?: BorrowerCreateOrConnectWithoutBorrowerInput;

    @Field(() => BorrowerWhereUniqueInput, {nullable:true})
    connect?: BorrowerWhereUniqueInput;
}
