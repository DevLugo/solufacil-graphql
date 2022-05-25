import { BorrowerCreateWithoutPhonesInput } from './borrower-create-without-phones.input';
import { BorrowerCreateOrConnectWithoutPhonesInput } from './borrower-create-or-connect-without-phones.input';
import { BorrowerUpsertWithoutPhonesInput } from './borrower-upsert-without-phones.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { BorrowerUpdateWithoutPhonesInput } from './borrower-update-without-phones.input';
export declare class BorrowerUpdateOneWithoutPhonesInput {
    create?: BorrowerCreateWithoutPhonesInput;
    connectOrCreate?: BorrowerCreateOrConnectWithoutPhonesInput;
    upsert?: BorrowerUpsertWithoutPhonesInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: BorrowerWhereUniqueInput;
    update?: BorrowerUpdateWithoutPhonesInput;
}
