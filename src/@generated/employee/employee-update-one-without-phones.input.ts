import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutPhonesInput } from './employee-create-without-phones.input';
import { EmployeeCreateOrConnectWithoutPhonesInput } from './employee-create-or-connect-without-phones.input';
import { EmployeeUpsertWithoutPhonesInput } from './employee-upsert-without-phones.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutPhonesInput } from './employee-update-without-phones.input';

@InputType()
export class EmployeeUpdateOneWithoutPhonesInput {

    @Field(() => EmployeeCreateWithoutPhonesInput, {nullable:true})
    create?: EmployeeCreateWithoutPhonesInput;

    @Field(() => EmployeeCreateOrConnectWithoutPhonesInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutPhonesInput;

    @Field(() => EmployeeUpsertWithoutPhonesInput, {nullable:true})
    upsert?: EmployeeUpsertWithoutPhonesInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutPhonesInput, {nullable:true})
    update?: EmployeeUpdateWithoutPhonesInput;
}
