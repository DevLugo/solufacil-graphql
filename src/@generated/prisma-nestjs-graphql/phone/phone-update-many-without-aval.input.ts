import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneCreateWithoutAvalInput } from './phone-create-without-aval.input';
import { PhoneCreateOrConnectWithoutAvalInput } from './phone-create-or-connect-without-aval.input';
import { PhoneUpsertWithWhereUniqueWithoutAvalInput } from './phone-upsert-with-where-unique-without-aval.input';
import { PhoneCreateManyAvalInputEnvelope } from './phone-create-many-aval-input-envelope.input';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { PhoneUpdateWithWhereUniqueWithoutAvalInput } from './phone-update-with-where-unique-without-aval.input';
import { PhoneUpdateManyWithWhereWithoutAvalInput } from './phone-update-many-with-where-without-aval.input';
import { PhoneScalarWhereInput } from './phone-scalar-where.input';

@InputType()
export class PhoneUpdateManyWithoutAvalInput {

    @Field(() => [PhoneCreateWithoutAvalInput], {nullable:true})
    create?: Array<PhoneCreateWithoutAvalInput>;

    @Field(() => [PhoneCreateOrConnectWithoutAvalInput], {nullable:true})
    connectOrCreate?: Array<PhoneCreateOrConnectWithoutAvalInput>;

    @Field(() => [PhoneUpsertWithWhereUniqueWithoutAvalInput], {nullable:true})
    upsert?: Array<PhoneUpsertWithWhereUniqueWithoutAvalInput>;

    @Field(() => PhoneCreateManyAvalInputEnvelope, {nullable:true})
    createMany?: PhoneCreateManyAvalInputEnvelope;

    @Field(() => [PhoneWhereUniqueInput], {nullable:true})
    set?: Array<PhoneWhereUniqueInput>;

    @Field(() => [PhoneWhereUniqueInput], {nullable:true})
    disconnect?: Array<PhoneWhereUniqueInput>;

    @Field(() => [PhoneWhereUniqueInput], {nullable:true})
    delete?: Array<PhoneWhereUniqueInput>;

    @Field(() => [PhoneWhereUniqueInput], {nullable:true})
    connect?: Array<PhoneWhereUniqueInput>;

    @Field(() => [PhoneUpdateWithWhereUniqueWithoutAvalInput], {nullable:true})
    update?: Array<PhoneUpdateWithWhereUniqueWithoutAvalInput>;

    @Field(() => [PhoneUpdateManyWithWhereWithoutAvalInput], {nullable:true})
    updateMany?: Array<PhoneUpdateManyWithWhereWithoutAvalInput>;

    @Field(() => [PhoneScalarWhereInput], {nullable:true})
    deleteMany?: Array<PhoneScalarWhereInput>;
}
