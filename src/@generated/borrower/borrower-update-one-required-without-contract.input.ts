import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BorrowerCreateWithoutContractInput } from './borrower-create-without-contract.input';
import { BorrowerCreateOrConnectWithoutContractInput } from './borrower-create-or-connect-without-contract.input';
import { BorrowerUpsertWithoutContractInput } from './borrower-upsert-without-contract.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { BorrowerUpdateWithoutContractInput } from './borrower-update-without-contract.input';

@InputType()
export class BorrowerUpdateOneRequiredWithoutContractInput {

    @Field(() => BorrowerCreateWithoutContractInput, {nullable:true})
    create?: BorrowerCreateWithoutContractInput;

    @Field(() => BorrowerCreateOrConnectWithoutContractInput, {nullable:true})
    connectOrCreate?: BorrowerCreateOrConnectWithoutContractInput;

    @Field(() => BorrowerUpsertWithoutContractInput, {nullable:true})
    upsert?: BorrowerUpsertWithoutContractInput;

    @Field(() => BorrowerWhereUniqueInput, {nullable:true})
    connect?: BorrowerWhereUniqueInput;

    @Field(() => BorrowerUpdateWithoutContractInput, {nullable:true})
    update?: BorrowerUpdateWithoutContractInput;
}
