import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutLoanInput } from './employee-create-without-loan.input';
import { EmployeeCreateOrConnectWithoutLoanInput } from './employee-create-or-connect-without-loan.input';
import { EmployeeUpsertWithoutLoanInput } from './employee-upsert-without-loan.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutLoanInput } from './employee-update-without-loan.input';

@InputType()
export class EmployeeUpdateOneRequiredWithoutLoanInput {

    @Field(() => EmployeeCreateWithoutLoanInput, {nullable:true})
    create?: EmployeeCreateWithoutLoanInput;

    @Field(() => EmployeeCreateOrConnectWithoutLoanInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutLoanInput;

    @Field(() => EmployeeUpsertWithoutLoanInput, {nullable:true})
    upsert?: EmployeeUpsertWithoutLoanInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutLoanInput, {nullable:true})
    update?: EmployeeUpdateWithoutLoanInput;
}
