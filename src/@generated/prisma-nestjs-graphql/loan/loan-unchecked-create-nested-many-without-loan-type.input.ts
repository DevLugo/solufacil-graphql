import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanCreateWithoutLoanTypeInput } from './loan-create-without-loan-type.input';
import { LoanCreateOrConnectWithoutLoanTypeInput } from './loan-create-or-connect-without-loan-type.input';
import { LoanCreateManyLoanTypeInputEnvelope } from './loan-create-many-loan-type-input-envelope.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';

@InputType()
export class LoanUncheckedCreateNestedManyWithoutLoanTypeInput {

    @Field(() => [LoanCreateWithoutLoanTypeInput], {nullable:true})
    create?: Array<LoanCreateWithoutLoanTypeInput>;

    @Field(() => [LoanCreateOrConnectWithoutLoanTypeInput], {nullable:true})
    connectOrCreate?: Array<LoanCreateOrConnectWithoutLoanTypeInput>;

    @Field(() => LoanCreateManyLoanTypeInputEnvelope, {nullable:true})
    createMany?: LoanCreateManyLoanTypeInputEnvelope;

    @Field(() => [LoanWhereUniqueInput], {nullable:true})
    connect?: Array<LoanWhereUniqueInput>;
}
