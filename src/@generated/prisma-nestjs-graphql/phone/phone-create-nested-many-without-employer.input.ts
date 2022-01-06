import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneCreateWithoutEmployerInput } from './phone-create-without-employer.input';
import { PhoneCreateOrConnectWithoutEmployerInput } from './phone-create-or-connect-without-employer.input';
import { PhoneCreateManyEmployerInputEnvelope } from './phone-create-many-employer-input-envelope.input';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';

@InputType()
export class PhoneCreateNestedManyWithoutEmployerInput {

    @Field(() => [PhoneCreateWithoutEmployerInput], {nullable:true})
    create?: Array<PhoneCreateWithoutEmployerInput>;

    @Field(() => [PhoneCreateOrConnectWithoutEmployerInput], {nullable:true})
    connectOrCreate?: Array<PhoneCreateOrConnectWithoutEmployerInput>;

    @Field(() => PhoneCreateManyEmployerInputEnvelope, {nullable:true})
    createMany?: PhoneCreateManyEmployerInputEnvelope;

    @Field(() => [PhoneWhereUniqueInput], {nullable:true})
    connect?: Array<PhoneWhereUniqueInput>;
}
