import { BorrowerCreateWithoutPhonesInput } from './borrower-create-without-phones.input';
import { BorrowerCreateOrConnectWithoutPhonesInput } from './borrower-create-or-connect-without-phones.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
export declare class BorrowerCreateNestedOneWithoutPhonesInput {
    create?: BorrowerCreateWithoutPhonesInput;
    connectOrCreate?: BorrowerCreateOrConnectWithoutPhonesInput;
    connect?: BorrowerWhereUniqueInput;
}
