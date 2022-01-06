import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneCreateWithoutEmployerInput } from './phone-create-without-employer.input';
import { PhoneCreateOrConnectWithoutEmployerInput } from './phone-create-or-connect-without-employer.input';
import { PhoneUpsertWithWhereUniqueWithoutEmployerInput } from './phone-upsert-with-where-unique-without-employer.input';
import { PhoneCreateManyEmployerInputEnvelope } from './phone-create-many-employer-input-envelope.input';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { PhoneUpdateWithWhereUniqueWithoutEmployerInput } from './phone-update-with-where-unique-without-employer.input';
import { PhoneUpdateManyWithWhereWithoutEmployerInput } from './phone-update-many-with-where-without-employer.input';
import { PhoneScalarWhereInput } from './phone-scalar-where.input';

@InputType()
export class PhoneUncheckedUpdateManyWithoutEmployerInput {

    @Field(() => [PhoneCreateWithoutEmployerInput], {nullable:true})
    create?: Array<PhoneCreateWithoutEmployerInput>;

    @Field(() => [PhoneCreateOrConnectWithoutEmployerInput], {nullable:true})
    connectOrCreate?: Array<PhoneCreateOrConnectWithoutEmployerInput>;

    @Field(() => [PhoneUpsertWithWhereUniqueWithoutEmployerInput], {nullable:true})
    upsert?: Array<PhoneUpsertWithWhereUniqueWithoutEmployerInput>;

    @Field(() => PhoneCreateManyEmployerInputEnvelope, {nullable:true})
    createMany?: PhoneCreateManyEmployerInputEnvelope;

    @Field(() => [PhoneWhereUniqueInput], {nullable:true})
    set?: Array<PhoneWhereUniqueInput>;

    @Field(() => [PhoneWhereUniqueInput], {nullable:true})
    disconnect?: Array<PhoneWhereUniqueInput>;

    @Field(() => [PhoneWhereUniqueInput], {nullable:true})
    delete?: Array<PhoneWhereUniqueInput>;

    @Field(() => [PhoneWhereUniqueInput], {nullable:true})
    connect?: Array<PhoneWhereUniqueInput>;

    @Field(() => [PhoneUpdateWithWhereUniqueWithoutEmployerInput], {nullable:true})
    update?: Array<PhoneUpdateWithWhereUniqueWithoutEmployerInput>;

    @Field(() => [PhoneUpdateManyWithWhereWithoutEmployerInput], {nullable:true})
    updateMany?: Array<PhoneUpdateManyWithWhereWithoutEmployerInput>;

    @Field(() => [PhoneScalarWhereInput], {nullable:true})
    deleteMany?: Array<PhoneScalarWhereInput>;
}
