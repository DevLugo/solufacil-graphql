import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutDocumentsInput } from './employee-create-without-documents.input';
import { EmployeeCreateOrConnectWithoutDocumentsInput } from './employee-create-or-connect-without-documents.input';
import { EmployeeUpsertWithoutDocumentsInput } from './employee-upsert-without-documents.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutDocumentsInput } from './employee-update-without-documents.input';

@InputType()
export class EmployeeUpdateOneWithoutDocumentsInput {

    @Field(() => EmployeeCreateWithoutDocumentsInput, {nullable:true})
    create?: EmployeeCreateWithoutDocumentsInput;

    @Field(() => EmployeeCreateOrConnectWithoutDocumentsInput, {nullable:true})
    connectOrCreate?: EmployeeCreateOrConnectWithoutDocumentsInput;

    @Field(() => EmployeeUpsertWithoutDocumentsInput, {nullable:true})
    upsert?: EmployeeUpsertWithoutDocumentsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    connect?: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutDocumentsInput, {nullable:true})
    update?: EmployeeUpdateWithoutDocumentsInput;
}
