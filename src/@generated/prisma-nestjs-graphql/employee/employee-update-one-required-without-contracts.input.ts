import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutContractsInput } from './employee-create-without-contracts.input';
import { EmployeeCreateOrConnectWithoutContractsInput } from './employee-create-or-connect-without-contracts.input';
import { EmployeeUpsertWithoutContractsInput } from './employee-upsert-without-contracts.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutContractsInput } from './employee-update-without-contracts.input';

@InputType()
export class EmployeeUpdateOneRequiredWithoutContractsInput {

    @Field(() => EmployeeCreateWithoutContractsInput, {nullable:true})
    create?: EmployeeCreateWithoutContractsInput;

    @Field(() => EmployeeCreateOrConnectWithoutContractsInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutContractsInput;

    @Field(() => EmployeeUpsertWithoutContractsInput, {nullable:true})
    upsert?: EmployeeUpsertWithoutContractsInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutContractsInput, {nullable:true})
    update?: EmployeeUpdateWithoutContractsInput;
}
