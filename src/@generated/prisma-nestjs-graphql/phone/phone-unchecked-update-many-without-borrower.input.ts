import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneCreateWithoutBorrowerInput } from './phone-create-without-borrower.input';
import { PhoneCreateOrConnectWithoutBorrowerInput } from './phone-create-or-connect-without-borrower.input';
import { PhoneUpsertWithWhereUniqueWithoutBorrowerInput } from './phone-upsert-with-where-unique-without-borrower.input';
import { PhoneCreateManyBorrowerInputEnvelope } from './phone-create-many-borrower-input-envelope.input';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { PhoneUpdateWithWhereUniqueWithoutBorrowerInput } from './phone-update-with-where-unique-without-borrower.input';
import { PhoneUpdateManyWithWhereWithoutBorrowerInput } from './phone-update-many-with-where-without-borrower.input';
import { PhoneScalarWhereInput } from './phone-scalar-where.input';

@InputType()
export class PhoneUncheckedUpdateManyWithoutBorrowerInput {

    @Field(() => [PhoneCreateWithoutBorrowerInput], {nullable:true})
    create?: Array<PhoneCreateWithoutBorrowerInput>;

    @Field(() => [PhoneCreateOrConnectWithoutBorrowerInput], {nullable:true})
    connectOrCreate?: Array<PhoneCreateOrConnectWithoutBorrowerInput>;

    @Field(() => [PhoneUpsertWithWhereUniqueWithoutBorrowerInput], {nullable:true})
    upsert?: Array<PhoneUpsertWithWhereUniqueWithoutBorrowerInput>;

    @Field(() => PhoneCreateManyBorrowerInputEnvelope, {nullable:true})
    createMany?: PhoneCreateManyBorrowerInputEnvelope;

    @Field(() => [PhoneWhereUniqueInput], {nullable:true})
    set?: Array<PhoneWhereUniqueInput>;

    @Field(() => [PhoneWhereUniqueInput], {nullable:true})
    disconnect?: Array<PhoneWhereUniqueInput>;

    @Field(() => [PhoneWhereUniqueInput], {nullable:true})
    delete?: Array<PhoneWhereUniqueInput>;

    @Field(() => [PhoneWhereUniqueInput], {nullable:true})
    connect?: Array<PhoneWhereUniqueInput>;

    @Field(() => [PhoneUpdateWithWhereUniqueWithoutBorrowerInput], {nullable:true})
    update?: Array<PhoneUpdateWithWhereUniqueWithoutBorrowerInput>;

    @Field(() => [PhoneUpdateManyWithWhereWithoutBorrowerInput], {nullable:true})
    updateMany?: Array<PhoneUpdateManyWithWhereWithoutBorrowerInput>;

    @Field(() => [PhoneScalarWhereInput], {nullable:true})
    deleteMany?: Array<PhoneScalarWhereInput>;
}
