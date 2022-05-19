import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentCreateWithoutEmployeeInput } from './document-create-without-employee.input';

@InputType()
export class DocumentCreateOrConnectWithoutEmployeeInput {

    @Field(() => DocumentWhereUniqueInput, {nullable:false})
    where!: DocumentWhereUniqueInput;

    @Field(() => DocumentCreateWithoutEmployeeInput, {nullable:false})
    create!: DocumentCreateWithoutEmployeeInput;
}
