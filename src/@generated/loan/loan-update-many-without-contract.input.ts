import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanCreateWithoutContractInput } from './loan-create-without-contract.input';
import { LoanCreateOrConnectWithoutContractInput } from './loan-create-or-connect-without-contract.input';
import { LoanUpsertWithWhereUniqueWithoutContractInput } from './loan-upsert-with-where-unique-without-contract.input';
import { LoanCreateManyContractInputEnvelope } from './loan-create-many-contract-input-envelope.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanUpdateWithWhereUniqueWithoutContractInput } from './loan-update-with-where-unique-without-contract.input';
import { LoanUpdateManyWithWhereWithoutContractInput } from './loan-update-many-with-where-without-contract.input';
import { LoanScalarWhereInput } from './loan-scalar-where.input';

@InputType()
export class LoanUpdateManyWithoutContractInput {

    @Field(() => [LoanCreateWithoutContractInput], {nullable:true})
    create?: Array<LoanCreateWithoutContractInput>;

    @Field(() => [LoanCreateOrConnectWithoutContractInput], {nullable:true})
    connectOrCreate?: Array<LoanCreateOrConnectWithoutContractInput>;

    @Field(() => [LoanUpsertWithWhereUniqueWithoutContractInput], {nullable:true})
    upsert?: Array<LoanUpsertWithWhereUniqueWithoutContractInput>;

    @Field(() => LoanCreateManyContractInputEnvelope, {nullable:true})
    createMany?: LoanCreateManyContractInputEnvelope;

    @Field(() => [LoanWhereUniqueInput], {nullable:true})
    set?: Array<LoanWhereUniqueInput>;

    @Field(() => [LoanWhereUniqueInput], {nullable:true})
    disconnect?: Array<LoanWhereUniqueInput>;

    @Field(() => [LoanWhereUniqueInput], {nullable:true})
    delete?: Array<LoanWhereUniqueInput>;

    @Field(() => [LoanWhereUniqueInput], {nullable:true})
    connect?: Array<LoanWhereUniqueInput>;

    @Field(() => [LoanUpdateWithWhereUniqueWithoutContractInput], {nullable:true})
    update?: Array<LoanUpdateWithWhereUniqueWithoutContractInput>;

    @Field(() => [LoanUpdateManyWithWhereWithoutContractInput], {nullable:true})
    updateMany?: Array<LoanUpdateManyWithWhereWithoutContractInput>;

    @Field(() => [LoanScalarWhereInput], {nullable:true})
    deleteMany?: Array<LoanScalarWhereInput>;
}
