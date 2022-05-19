import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoantypeUpdateWithoutLoanInput } from './loantype-update-without-loan.input';
import { LoantypeCreateWithoutLoanInput } from './loantype-create-without-loan.input';

@InputType()
export class LoantypeUpsertWithoutLoanInput {

    @Field(() => LoantypeUpdateWithoutLoanInput, {nullable:false})
    update!: LoantypeUpdateWithoutLoanInput;

    @Field(() => LoantypeCreateWithoutLoanInput, {nullable:false})
    create!: LoantypeCreateWithoutLoanInput;
}
