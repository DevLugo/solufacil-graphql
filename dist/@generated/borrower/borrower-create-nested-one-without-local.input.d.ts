import { BorrowerCreateWithoutLocalInput } from './borrower-create-without-local.input';
import { BorrowerCreateOrConnectWithoutLocalInput } from './borrower-create-or-connect-without-local.input';
import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
export declare class BorrowerCreateNestedOneWithoutLocalInput {
    create?: BorrowerCreateWithoutLocalInput;
    connectOrCreate?: BorrowerCreateOrConnectWithoutLocalInput;
    connect?: BorrowerWhereUniqueInput;
}
