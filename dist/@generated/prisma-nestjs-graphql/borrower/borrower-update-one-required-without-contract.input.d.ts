import { BorrowerCreateWithoutContractInput } from './borrower-create-without-contract.input';
import { BorrowerCreateOrConnectWithoutContractInput } from './borrower-create-or-connect-without-contract.input';
import { BorrowerUpsertWithoutContractInput } from './borrower-upsert-without-contract.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { BorrowerUpdateWithoutContractInput } from './borrower-update-without-contract.input';
export declare class BorrowerUpdateOneRequiredWithoutContractInput {
    create?: BorrowerCreateWithoutContractInput;
    connectOrCreate?: BorrowerCreateOrConnectWithoutContractInput;
    upsert?: BorrowerUpsertWithoutContractInput;
    connect?: BorrowerWhereUniqueInput;
    update?: BorrowerUpdateWithoutContractInput;
}
