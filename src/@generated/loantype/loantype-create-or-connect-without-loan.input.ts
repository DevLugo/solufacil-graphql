import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoantypeWhereUniqueInput } from './loantype-where-unique.input';
import { LoantypeCreateWithoutLoanInput } from './loantype-create-without-loan.input';

@InputType()
export class LoantypeCreateOrConnectWithoutLoanInput {

    @Field(() => LoantypeWhereUniqueInput, {nullable:false})
    where!: LoantypeWhereUniqueInput;

    @Field(() => LoantypeCreateWithoutLoanInput, {nullable:false})
    create!: LoantypeCreateWithoutLoanInput;
}
