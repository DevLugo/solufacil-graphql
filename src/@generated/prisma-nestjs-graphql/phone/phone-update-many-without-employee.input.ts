import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneCreateWithoutEmployeeInput } from './phone-create-without-employee.input';
import { PhoneCreateOrConnectWithoutEmployeeInput } from './phone-create-or-connect-without-employee.input';
import { PhoneUpsertWithWhereUniqueWithoutEmployeeInput } from './phone-upsert-with-where-unique-without-employee.input';
import { PhoneCreateManyEmployeeInputEnvelope } from './phone-create-many-employee-input-envelope.input';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { PhoneUpdateWithWhereUniqueWithoutEmployeeInput } from './phone-update-with-where-unique-without-employee.input';
import { PhoneUpdateManyWithWhereWithoutEmployeeInput } from './phone-update-many-with-where-without-employee.input';
import { PhoneScalarWhereInput } from './phone-scalar-where.input';

@InputType()
export class PhoneUpdateManyWithoutEmployeeInput {

    @Field(() => [PhoneCreateWithoutEmployeeInput], {nullable:true})
    create?: Array<PhoneCreateWithoutEmployeeInput>;

    @Field(() => [PhoneCreateOrConnectWithoutEmployeeInput], {nullable:true})
    connectOrCreate?: Array<PhoneCreateOrConnectWithoutEmployeeInput>;

    @Field(() => [PhoneUpsertWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    upsert?: Array<PhoneUpsertWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => PhoneCreateManyEmployeeInputEnvelope, {nullable:true})
    createMany?: PhoneCreateManyEmployeeInputEnvelope;

    @Field(() => [PhoneWhereUniqueInput], {nullable:true})
    set?: Array<PhoneWhereUniqueInput>;

    @Field(() => [PhoneWhereUniqueInput], {nullable:true})
    disconnect?: Array<PhoneWhereUniqueInput>;

    @Field(() => [PhoneWhereUniqueInput], {nullable:true})
    delete?: Array<PhoneWhereUniqueInput>;

    @Field(() => [PhoneWhereUniqueInput], {nullable:true})
    connect?: Array<PhoneWhereUniqueInput>;

    @Field(() => [PhoneUpdateWithWhereUniqueWithoutEmployeeInput], {nullable:true})
    update?: Array<PhoneUpdateWithWhereUniqueWithoutEmployeeInput>;

    @Field(() => [PhoneUpdateManyWithWhereWithoutEmployeeInput], {nullable:true})
    updateMany?: Array<PhoneUpdateManyWithWhereWithoutEmployeeInput>;

    @Field(() => [PhoneScalarWhereInput], {nullable:true})
    deleteMany?: Array<PhoneScalarWhereInput>;
}
