import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployerCreateWithoutDocumentsInput } from './employer-create-without-documents.input';
import { EmployerCreateOrConnectWithoutDocumentsInput } from './employer-create-or-connect-without-documents.input';
import { EmployerWhereUniqueInput } from './employer-where-unique.input';

@InputType()
export class EmployerCreateNestedOneWithoutDocumentsInput {

    @Field(() => EmployerCreateWithoutDocumentsInput, {nullable:true})
    create?: EmployerCreateWithoutDocumentsInput;

    @Field(() => EmployerCreateOrConnectWithoutDocumentsInput, {nullable:true})
    connectOrCreate?: EmployerCreateOrConnectWithoutDocumentsInput;

    @Field(() => EmployerWhereUniqueInput, {nullable:true})
    connect?: EmployerWhereUniqueInput;
}
