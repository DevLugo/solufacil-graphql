import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneCreateWithoutEmployeeInput } from './phone-create-without-employee.input';
import { PhoneCreateOrConnectWithoutEmployeeInput } from './phone-create-or-connect-without-employee.input';
import { PhoneCreateManyEmployeeInputEnvelope } from './phone-create-many-employee-input-envelope.input';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';

@InputType()
export class PhoneCreateNestedManyWithoutEmployeeInput {

    @Field(() => [PhoneCreateWithoutEmployeeInput], {nullable:true})
    create?: Array<PhoneCreateWithoutEmployeeInput>;

    @Field(() => [PhoneCreateOrConnectWithoutEmployeeInput], {nullable:true})
    connectOrCreate?: Array<PhoneCreateOrConnectWithoutEmployeeInput>;

    @Field(() => PhoneCreateManyEmployeeInputEnvelope, {nullable:true})
    createMany?: PhoneCreateManyEmployeeInputEnvelope;

    @Field(() => [PhoneWhereUniqueInput], {nullable:true})
    connect?: Array<PhoneWhereUniqueInput>;
}
