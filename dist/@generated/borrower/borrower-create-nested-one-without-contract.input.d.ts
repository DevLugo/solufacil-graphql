import { BorrowerCreateWithoutContractInput } from './borrower-create-without-contract.input';
import { BorrowerCreateOrConnectWithoutContractInput } from './borrower-create-or-connect-without-contract.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
export declare class BorrowerCreateNestedOneWithoutContractInput {
    create?: BorrowerCreateWithoutContractInput;
    connectOrCreate?: BorrowerCreateOrConnectWithoutContractInput;
    connect?: BorrowerWhereUniqueInput;
}
