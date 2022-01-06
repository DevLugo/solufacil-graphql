import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoanUpdateWithoutPaymentsInput } from './loan-update-without-payments.input';
import { LoanCreateWithoutPaymentsInput } from './loan-create-without-payments.input';

@InputType()
export class LoanUpsertWithoutPaymentsInput {

    @Field(() => LoanUpdateWithoutPaymentsInput, {nullable:false})
    update!: LoanUpdateWithoutPaymentsInput;

    @Field(() => LoanCreateWithoutPaymentsInput, {nullable:false})
    create!: LoanCreateWithoutPaymentsInput;
}
