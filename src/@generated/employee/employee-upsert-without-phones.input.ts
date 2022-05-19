import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUpdateWithoutPhonesInput } from './employee-update-without-phones.input';
import { EmployeeCreateWithoutPhonesInput } from './employee-create-without-phones.input';

@InputType()
export class EmployeeUpsertWithoutPhonesInput {

    @Field(() => EmployeeUpdateWithoutPhonesInput, {nullable:false})
    update!: EmployeeUpdateWithoutPhonesInput;

    @Field(() => EmployeeCreateWithoutPhonesInput, {nullable:false})
    create!: EmployeeCreateWithoutPhonesInput;
}
