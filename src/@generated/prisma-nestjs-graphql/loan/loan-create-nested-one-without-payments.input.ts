import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanCreateWithoutPaymentsInput } from './loan-create-without-payments.input';
import { LoanCreateOrConnectWithoutPaymentsInput } from './loan-create-or-connect-without-payments.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';

@InputType()
export class LoanCreateNestedOneWithoutPaymentsInput {

    @Field(() => LoanCreateWithoutPaymentsInput, {nullable:true})
    create?: LoanCreateWithoutPaymentsInput;

    @Field(() => LoanCreateOrConnectWithoutPaymentsInput, {nullable:true})
    connectOrCreate?: LoanCreateOrConnectWithoutPaymentsInput;

    @Field(() => LoanWhereUniqueInput, {nullable:true})
    connect?: LoanWhereUniqueInput;
}
