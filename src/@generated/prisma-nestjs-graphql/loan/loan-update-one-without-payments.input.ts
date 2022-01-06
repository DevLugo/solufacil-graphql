import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanCreateWithoutPaymentsInput } from './loan-create-without-payments.input';
import { LoanCreateOrConnectWithoutPaymentsInput } from './loan-create-or-connect-without-payments.input';
import { LoanUpsertWithoutPaymentsInput } from './loan-upsert-without-payments.input';
import { LoanWhereUniqueInput } from './loan-where-unique.input';
import { LoanUpdateWithoutPaymentsInput } from './loan-update-without-payments.input';

@InputType()
export class LoanUpdateOneWithoutPaymentsInput {

    @Field(() => LoanCreateWithoutPaymentsInput, {nullable:true})
    create?: LoanCreateWithoutPaymentsInput;

    @Field(() => LoanCreateOrConnectWithoutPaymentsInput, {nullable:true})
    connectOrCreate?: LoanCreateOrConnectWithoutPaymentsInput;

    @Field(() => LoanUpsertWithoutPaymentsInput, {nullable:true})
    upsert?: LoanUpsertWithoutPaymentsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => LoanWhereUniqueInput, {nullable:true})
    connect?: LoanWhereUniqueInput;

    @Field(() => LoanUpdateWithoutPaymentsInput, {nullable:true})
    update?: LoanUpdateWithoutPaymentsInput;
}
