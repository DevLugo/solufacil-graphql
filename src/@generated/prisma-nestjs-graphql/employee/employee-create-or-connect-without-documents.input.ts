import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeCreateWithoutDocumentsInput } from './employee-create-without-documents.input';

@InputType()
export class EmployeeCreateOrConnectWithoutDocumentsInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeCreateWithoutDocumentsInput, {nullable:false})
    create!: EmployeeCreateWithoutDocumentsInput;
}
