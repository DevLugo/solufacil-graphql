import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployerWhereUniqueInput } from './employer-where-unique.input';
import { EmployerCreateWithoutDocumentsInput } from './employer-create-without-documents.input';

@InputType()
export class EmployerCreateOrConnectWithoutDocumentsInput {

    @Field(() => EmployerWhereUniqueInput, {nullable:false})
    where!: EmployerWhereUniqueInput;

    @Field(() => EmployerCreateWithoutDocumentsInput, {nullable:false})
    create!: EmployerCreateWithoutDocumentsInput;
}
