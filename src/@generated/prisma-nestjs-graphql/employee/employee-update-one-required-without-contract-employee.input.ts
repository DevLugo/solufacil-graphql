import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutContractEmployeeInput } from './employee-create-without-contract-employee.input';
import { EmployeeCreateOrConnectWithoutContractEmployeeInput } from './employee-create-or-connect-without-contract-employee.input';
import { EmployeeUpsertWithoutContractEmployeeInput } from './employee-upsert-without-contract-employee.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutContractEmployeeInput } from './employee-update-without-contract-employee.input';

@InputType()
export class EmployeeUpdateOneRequiredWithoutContractEmployeeInput {

    @Field(() => EmployeeCreateWithoutContractEmployeeInput, {nullable:true})
    create?: EmployeeCreateWithoutContractEmployeeInput;

    @Field(() => EmployeeCreateOrConnectWithoutContractEmployeeInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutContractEmployeeInput;

    @Field(() => EmployeeUpsertWithoutContractEmployeeInput, {nullable:true})
    upsert?: EmployeeUpsertWithoutContractEmployeeInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutContractEmployeeInput, {nullable:true})
    update?: EmployeeUpdateWithoutContractEmployeeInput;
}
