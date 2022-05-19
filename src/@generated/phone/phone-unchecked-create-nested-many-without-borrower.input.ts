import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhoneCreateWithoutBorrowerInput } from './phone-create-without-borrower.input';
import { PhoneCreateOrConnectWithoutBorrowerInput } from './phone-create-or-connect-without-borrower.input';
import { PhoneCreateManyBorrowerInputEnvelope } from './phone-create-many-borrower-input-envelope.input';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';

@InputType()
export class PhoneUncheckedCreateNestedManyWithoutBorrowerInput {

    @Field(() => [PhoneCreateWithoutBorrowerInput], {nullable:true})
    create?: Array<PhoneCreateWithoutBorrowerInput>;

    @Field(() => [PhoneCreateOrConnectWithoutBorrowerInput], {nullable:true})
    connectOrCreate?: Array<PhoneCreateOrConnectWithoutBorrowerInput>;

    @Field(() => PhoneCreateManyBorrowerInputEnvelope, {nullable:true})
    createMany?: PhoneCreateManyBorrowerInputEnvelope;

    @Field(() => [PhoneWhereUniqueInput], {nullable:true})
    connect?: Array<PhoneWhereUniqueInput>;
}
