import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployerCreateWithoutPhonesInput } from './employer-create-without-phones.input';
import { EmployerCreateOrConnectWithoutPhonesInput } from './employer-create-or-connect-without-phones.input';
import { EmployerWhereUniqueInput } from './employer-where-unique.input';

@InputType()
export class EmployerCreateNestedOneWithoutPhonesInput {

    @Field(() => EmployerCreateWithoutPhonesInput, {nullable:true})
    create?: EmployerCreateWithoutPhonesInput;

    @Field(() => EmployerCreateOrConnectWithoutPhonesInput, {nullable:true})
    connectOrCreate?: EmployerCreateOrConnectWithoutPhonesInput;

    @Field(() => EmployerWhereUniqueInput, {nullable:true})
    connect?: EmployerWhereUniqueInput;
}
