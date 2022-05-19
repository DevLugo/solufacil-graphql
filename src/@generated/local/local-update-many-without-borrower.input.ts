import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocalCreateWithoutBorrowerInput } from './local-create-without-borrower.input';
import { LocalCreateOrConnectWithoutBorrowerInput } from './local-create-or-connect-without-borrower.input';
import { LocalUpsertWithWhereUniqueWithoutBorrowerInput } from './local-upsert-with-where-unique-without-borrower.input';
import { LocalCreateManyBorrowerInputEnvelope } from './local-create-many-borrower-input-envelope.input';
import { LocalWhereUniqueInput } from './local-where-unique.input';
import { LocalUpdateWithWhereUniqueWithoutBorrowerInput } from './local-update-with-where-unique-without-borrower.input';
import { LocalUpdateManyWithWhereWithoutBorrowerInput } from './local-update-many-with-where-without-borrower.input';
import { LocalScalarWhereInput } from './local-scalar-where.input';

@InputType()
export class LocalUpdateManyWithoutBorrowerInput {

    @Field(() => [LocalCreateWithoutBorrowerInput], {nullable:true})
    create?: Array<LocalCreateWithoutBorrowerInput>;

    @Field(() => [LocalCreateOrConnectWithoutBorrowerInput], {nullable:true})
    connectOrCreate?: Array<LocalCreateOrConnectWithoutBorrowerInput>;

    @Field(() => [LocalUpsertWithWhereUniqueWithoutBorrowerInput], {nullable:true})
    upsert?: Array<LocalUpsertWithWhereUniqueWithoutBorrowerInput>;

    @Field(() => LocalCreateManyBorrowerInputEnvelope, {nullable:true})
    createMany?: LocalCreateManyBorrowerInputEnvelope;

    @Field(() => [LocalWhereUniqueInput], {nullable:true})
    set?: Array<LocalWhereUniqueInput>;

    @Field(() => [LocalWhereUniqueInput], {nullable:true})
    disconnect?: Array<LocalWhereUniqueInput>;

    @Field(() => [LocalWhereUniqueInput], {nullable:true})
    delete?: Array<LocalWhereUniqueInput>;

    @Field(() => [LocalWhereUniqueInput], {nullable:true})
    connect?: Array<LocalWhereUniqueInput>;

    @Field(() => [LocalUpdateWithWhereUniqueWithoutBorrowerInput], {nullable:true})
    update?: Array<LocalUpdateWithWhereUniqueWithoutBorrowerInput>;

    @Field(() => [LocalUpdateManyWithWhereWithoutBorrowerInput], {nullable:true})
    updateMany?: Array<LocalUpdateManyWithWhereWithoutBorrowerInput>;

    @Field(() => [LocalScalarWhereInput], {nullable:true})
    deleteMany?: Array<LocalScalarWhereInput>;
}
