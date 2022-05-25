import { BorrowerCreateWithoutLocalInput } from './borrower-create-without-local.input';
import { BorrowerCreateOrConnectWithoutLocalInput } from './borrower-create-or-connect-without-local.input';
import { BorrowerUpsertWithoutLocalInput } from './borrower-upsert-without-local.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { BorrowerUpdateWithoutLocalInput } from './borrower-update-without-local.input';
export declare class BorrowerUpdateOneRequiredWithoutLocalInput {
    create?: BorrowerCreateWithoutLocalInput;
    connectOrCreate?: BorrowerCreateOrConnectWithoutLocalInput;
    upsert?: BorrowerUpsertWithoutLocalInput;
    connect?: BorrowerWhereUniqueInput;
    update?: BorrowerUpdateWithoutLocalInput;
}
