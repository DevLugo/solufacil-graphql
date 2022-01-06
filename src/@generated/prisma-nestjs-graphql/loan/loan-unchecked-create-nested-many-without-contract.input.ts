import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanCreateWithoutContractInput } from './loan-create-without-contract.input';
import { LoanCreateOrConnectWithoutContractInput } from './loan-create-or-connect-without-contract.input';
import { LoanCreateManyContractInputEnvelope } from './loan-create-many-contract-input-envelope.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';

@InputType()
export class LoanUncheckedCreateNestedManyWithoutContractInput {

    @Field(() => [LoanCreateWithoutContractInput], {nullable:true})
    create?: Array<LoanCreateWithoutContractInput>;

    @Field(() => [LoanCreateOrConnectWithoutContractInput], {nullable:true})
    connectOrCreate?: Array<LoanCreateOrConnectWithoutContractInput>;

    @Field(() => LoanCreateManyContractInputEnvelope, {nullable:true})
    createMany?: LoanCreateManyContractInputEnvelope;

    @Field(() => [LoanWhereUniqueInput], {nullable:true})
    connect?: Array<LoanWhereUniqueInput>;
}
