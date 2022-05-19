import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneCreateWithoutAvalInput } from './phone-create-without-aval.input';
import { PhoneCreateOrConnectWithoutAvalInput } from './phone-create-or-connect-without-aval.input';
import { PhoneCreateManyAvalInputEnvelope } from './phone-create-many-aval-input-envelope.input';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';

@InputType()
export class PhoneCreateNestedManyWithoutAvalInput {

    @Field(() => [PhoneCreateWithoutAvalInput], {nullable:true})
    create?: Array<PhoneCreateWithoutAvalInput>;

    @Field(() => [PhoneCreateOrConnectWithoutAvalInput], {nullable:true})
    connectOrCreate?: Array<PhoneCreateOrConnectWithoutAvalInput>;

    @Field(() => PhoneCreateManyAvalInputEnvelope, {nullable:true})
    createMany?: PhoneCreateManyAvalInputEnvelope;

    @Field(() => [PhoneWhereUniqueInput], {nullable:true})
    connect?: Array<PhoneWhereUniqueInput>;
}
