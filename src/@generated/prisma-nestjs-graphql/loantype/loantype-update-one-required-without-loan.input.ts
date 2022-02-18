import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoantypeCreateWithoutLoanInput } from './loantype-create-without-loan.input';
import { LoantypeCreateOrConnectWithoutLoanInput } from './loantype-create-or-connect-without-loan.input';
import { LoantypeUpsertWithoutLoanInput } from './loantype-upsert-without-loan.input';
import { LoantypeWhereUniqueInput } from './loantype-where-unique.input';
import { LoantypeUpdateWithoutLoanInput } from './loantype-update-without-loan.input';

@InputType()
export class LoantypeUpdateOneRequiredWithoutLoanInput {

    @Field(() => LoantypeCreateWithoutLoanInput, {nullable:true})
    create?: LoantypeCreateWithoutLoanInput;

    @Field(() => LoantypeCreateOrConnectWithoutLoanInput, {nullable:true})
    connectOrCreate?: LoantypeCreateOrConnectWithoutLoanInput;

    @Field(() => LoantypeUpsertWithoutLoanInput, {nullable:true})
    upsert?: LoantypeUpsertWithoutLoanInput;

    @Field(() => LoantypeWhereUniqueInput, {nullable:true})
    connect?: LoantypeWhereUniqueInput;

    @Field(() => LoantypeUpdateWithoutLoanInput, {nullable:true})
    update?: LoantypeUpdateWithoutLoanInput;
}
