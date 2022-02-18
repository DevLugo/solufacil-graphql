import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanCreateWithoutLoanTypeInput } from './loan-create-without-loan-type.input';
import { LoanCreateOrConnectWithoutLoanTypeInput } from './loan-create-or-connect-without-loan-type.input';
import { LoanUpsertWithWhereUniqueWithoutLoanTypeInput } from './loan-upsert-with-where-unique-without-loan-type.input';
import { LoanCreateManyLoanTypeInputEnvelope } from './loan-create-many-loan-type-input-envelope.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanUpdateWithWhereUniqueWithoutLoanTypeInput } from './loan-update-with-where-unique-without-loan-type.input';
import { LoanUpdateManyWithWhereWithoutLoanTypeInput } from './loan-update-many-with-where-without-loan-type.input';
import { LoanScalarWhereInput } from './loan-scalar-where.input';

@InputType()
export class LoanUpdateManyWithoutLoanTypeInput {

    @Field(() => [LoanCreateWithoutLoanTypeInput], {nullable:true})
    create?: Array<LoanCreateWithoutLoanTypeInput>;

    @Field(() => [LoanCreateOrConnectWithoutLoanTypeInput], {nullable:true})
    connectOrCreate?: Array<LoanCreateOrConnectWithoutLoanTypeInput>;

    @Field(() => [LoanUpsertWithWhereUniqueWithoutLoanTypeInput], {nullable:true})
    upsert?: Array<LoanUpsertWithWhereUniqueWithoutLoanTypeInput>;

    @Field(() => LoanCreateManyLoanTypeInputEnvelope, {nullable:true})
    createMany?: LoanCreateManyLoanTypeInputEnvelope;

    @Field(() => [LoanWhereUniqueInput], {nullable:true})
    set?: Array<LoanWhereUniqueInput>;

    @Field(() => [LoanWhereUniqueInput], {nullable:true})
    disconnect?: Array<LoanWhereUniqueInput>;

    @Field(() => [LoanWhereUniqueInput], {nullable:true})
    delete?: Array<LoanWhereUniqueInput>;

    @Field(() => [LoanWhereUniqueInput], {nullable:true})
    connect?: Array<LoanWhereUniqueInput>;

    @Field(() => [LoanUpdateWithWhereUniqueWithoutLoanTypeInput], {nullable:true})
    update?: Array<LoanUpdateWithWhereUniqueWithoutLoanTypeInput>;

    @Field(() => [LoanUpdateManyWithWhereWithoutLoanTypeInput], {nullable:true})
    updateMany?: Array<LoanUpdateManyWithWhereWithoutLoanTypeInput>;

    @Field(() => [LoanScalarWhereInput], {nullable:true})
    deleteMany?: Array<LoanScalarWhereInput>;
}
