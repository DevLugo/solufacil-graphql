import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoantypeCreateWithoutLoanInput } from './loantype-create-without-loan.input';
import { LoantypeCreateOrConnectWithoutLoanInput } from './loantype-create-or-connect-without-loan.input';
import { LoantypeWhereUniqueInput } from './loantype-where-unique.input';

@InputType()
export class LoantypeCreateNestedOneWithoutLoanInput {

    @Field(() => LoantypeCreateWithoutLoanInput, {nullable:true})
    create?: LoantypeCreateWithoutLoanInput;

    @Field(() => LoantypeCreateOrConnectWithoutLoanInput, {nullable:true})
    connectOrCreate?: LoantypeCreateOrConnectWithoutLoanInput;

    @Field(() => LoantypeWhereUniqueInput, {nullable:true})
    connect?: LoantypeWhereUniqueInput;
}
