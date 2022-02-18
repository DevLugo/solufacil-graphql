import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUpdateWithoutLoanInput } from './employee-update-without-loan.input';
import { EmployeeCreateWithoutLoanInput } from './employee-create-without-loan.input';

@InputType()
export class EmployeeUpsertWithoutLoanInput {

    @Field(() => EmployeeUpdateWithoutLoanInput, {nullable:false})
    update!: EmployeeUpdateWithoutLoanInput;

    @Field(() => EmployeeCreateWithoutLoanInput, {nullable:false})
    create!: EmployeeCreateWithoutLoanInput;
}
