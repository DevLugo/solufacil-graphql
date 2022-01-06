import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployerUpdateWithoutDocumentsInput } from './employer-update-without-documents.input';
import { EmployerCreateWithoutDocumentsInput } from './employer-create-without-documents.input';

@InputType()
export class EmployerUpsertWithoutDocumentsInput {

    @Field(() => EmployerUpdateWithoutDocumentsInput, {nullable:false})
    update!: EmployerUpdateWithoutDocumentsInput;

    @Field(() => EmployerCreateWithoutDocumentsInput, {nullable:false})
    create!: EmployerCreateWithoutDocumentsInput;
}
