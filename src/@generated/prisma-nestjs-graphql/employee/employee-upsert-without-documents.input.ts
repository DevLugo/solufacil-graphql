import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUpdateWithoutDocumentsInput } from './employee-update-without-documents.input';
import { EmployeeCreateWithoutDocumentsInput } from './employee-create-without-documents.input';

@InputType()
export class EmployeeUpsertWithoutDocumentsInput {

    @Field(() => EmployeeUpdateWithoutDocumentsInput, {nullable:false})
    update!: EmployeeUpdateWithoutDocumentsInput;

    @Field(() => EmployeeCreateWithoutDocumentsInput, {nullable:false})
    create!: EmployeeCreateWithoutDocumentsInput;
}
