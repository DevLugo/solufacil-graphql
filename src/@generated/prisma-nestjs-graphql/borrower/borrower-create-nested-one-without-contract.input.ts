import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerCreateWithoutContractInput } from './borrower-create-without-contract.input';
import { BorrowerCreateOrConnectWithoutContractInput } from './borrower-create-or-connect-without-contract.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';

@InputType()
export class BorrowerCreateNestedOneWithoutContractInput {

    @Field(() => BorrowerCreateWithoutContractInput, {nullable:true})
    create?: BorrowerCreateWithoutContractInput;

    @Field(() => BorrowerCreateOrConnectWithoutContractInput, {nullable:true})
    connectOrCreate?: BorrowerCreateOrConnectWithoutContractInput;

    @Field(() => BorrowerWhereUniqueInput, {nullable:true})
    connect?: BorrowerWhereUniqueInput;
}
