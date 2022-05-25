import { AvalCreateWithoutPhonesInput } from './aval-create-without-phones.input';
import { AvalCreateOrConnectWithoutPhonesInput } from './aval-create-or-connect-without-phones.input';
import { AvalUpsertWithoutPhonesInput } from './aval-upsert-without-phones.input';
import { AvalWhereUniqueInput } from './aval-where-unique.input';
import { AvalUpdateWithoutPhonesInput } from './aval-update-without-phones.input';
export declare class AvalUpdateOneWithoutPhonesInput {
    create?: AvalCreateWithoutPhonesInput;
    connectOrCreate?: AvalCreateOrConnectWithoutPhonesInput;
    upsert?: AvalUpsertWithoutPhonesInput;
    disconnect?: boolean;
    delete?: boolean;
    connect?: AvalWhereUniqueInput;
    update?: AvalUpdateWithoutPhonesInput;
}
