import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutDocumentsInput } from './employee-create-without-documents.input';
import { EmployeeCreateOrConnectWithoutDocumentsInput } from './employee-create-or-connect-without-documents.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeCreateNestedOneWithoutDocumentsInput {

    @Field(() => EmployeeCreateWithoutDocumentsInput, {nullable:true})
    create?: EmployeeCreateWithoutDocumentsInput;

    @Field(() => EmployeeCreateOrConnectWithoutDocumentsInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutDocumentsInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;
}
