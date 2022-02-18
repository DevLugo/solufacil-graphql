import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutEmployeeInput } from './employee-create-without-employee.input';
import { EmployeeCreateOrConnectWithoutEmployeeInput } from './employee-create-or-connect-without-employee.input';
import { EmployeeUpsertWithoutEmployeeInput } from './employee-upsert-without-employee.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutEmployeeInput } from './employee-update-without-employee.input';

@InputType()
export class EmployeeUpdateOneWithoutEmployeeInput {

    @Field(() => EmployeeCreateWithoutEmployeeInput, {nullable:true})
    create?: EmployeeCreateWithoutEmployeeInput;

    @Field(() => EmployeeCreateOrConnectWithoutEmployeeInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmployeeInput;

    @Field(() => EmployeeUpsertWithoutEmployeeInput, {nullable:true})
    upsert?: EmployeeUpsertWithoutEmployeeInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutEmployeeInput, {nullable:true})
    update?: EmployeeUpdateWithoutEmployeeInput;
}
