import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutContractInput } from './employee-create-without-contract.input';
import { EmployeeCreateOrConnectWithoutContractInput } from './employee-create-or-connect-without-contract.input';
import { EmployeeUpsertWithoutContractInput } from './employee-upsert-without-contract.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutContractInput } from './employee-update-without-contract.input';

@InputType()
export class EmployeeUpdateOneRequiredWithoutContractInput {

    @Field(() => EmployeeCreateWithoutContractInput, {nullable:true})
    create?: EmployeeCreateWithoutContractInput;

    @Field(() => EmployeeCreateOrConnectWithoutContractInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutContractInput;

    @Field(() => EmployeeUpsertWithoutContractInput, {nullable:true})
    upsert?: EmployeeUpsertWithoutContractInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutContractInput, {nullable:true})
    update?: EmployeeUpdateWithoutContractInput;
}
