import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployerCreateWithoutPhonesInput } from './employer-create-without-phones.input';
import { EmployerCreateOrConnectWithoutPhonesInput } from './employer-create-or-connect-without-phones.input';
import { EmployerUpsertWithoutPhonesInput } from './employer-upsert-without-phones.input';
import { EmployerWhereUniqueInput } from './employer-where-unique.input';
import { EmployerUpdateWithoutPhonesInput } from './employer-update-without-phones.input';

@InputType()
export class EmployerUpdateOneWithoutPhonesInput {

    @Field(() => EmployerCreateWithoutPhonesInput, {nullable:true})
    create?: EmployerCreateWithoutPhonesInput;

    @Field(() => EmployerCreateOrConnectWithoutPhonesInput, {nullable:true})
    connectOrCreate?: EmployerCreateOrConnectWithoutPhonesInput;

    @Field(() => EmployerUpsertWithoutPhonesInput, {nullable:true})
    upsert?: EmployerUpsertWithoutPhonesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => EmployerWhereUniqueInput, {nullable:true})
    connect?: EmployerWhereUniqueInput;

    @Field(() => EmployerUpdateWithoutPhonesInput, {nullable:true})
    update?: EmployerUpdateWithoutPhonesInput;
}
