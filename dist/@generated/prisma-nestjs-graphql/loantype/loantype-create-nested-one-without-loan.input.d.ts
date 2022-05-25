import { LoantypeCreateWithoutLoanInput } from './loantype-create-without-loan.input';
import { LoantypeCreateOrConnectWithoutLoanInput } from './loantype-create-or-connect-without-loan.input';
import { LoantypeWhereUniqueInput } from './loantype-where-unique.input';
export declare class LoantypeCreateNestedOneWithoutLoanInput {
    create?: LoantypeCreateWithoutLoanInput;
    connectOrCreate?: LoantypeCreateOrConnectWithoutLoanInput;
    connect?: LoantypeWhereUniqueInput;
}
