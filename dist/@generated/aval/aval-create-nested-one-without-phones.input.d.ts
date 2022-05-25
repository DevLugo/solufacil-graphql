import { AvalCreateWithoutPhonesInput } from './aval-create-without-phones.input';
import { AvalCreateOrConnectWithoutPhonesInput } from './aval-create-or-connect-without-phones.input';
import { AvalWhereUniqueInput } from './aval-where-unique.input';
export declare class AvalCreateNestedOneWithoutPhonesInput {
    create?: AvalCreateWithoutPhonesInput;
    connectOrCreate?: AvalCreateOrConnectWithoutPhonesInput;
    connect?: AvalWhereUniqueInput;
}
