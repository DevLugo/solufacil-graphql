import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentUpdateWithoutEmployeeInput } from './document-update-without-employee.input';
import { DocumentCreateWithoutEmployeeInput } from './document-create-without-employee.input';

@InputType()
export class DocumentUpsertWithWhereUniqueWithoutEmployeeInput {

    @Field(() => DocumentWhereUniqueInput, {nullable:false})
    where!: DocumentWhereUniqueInput;

    @Field(() => DocumentUpdateWithoutEmployeeInput, {nullable:false})
    update!: DocumentUpdateWithoutEmployeeInput;

    @Field(() => DocumentCreateWithoutEmployeeInput, {nullable:false})
    create!: DocumentCreateWithoutEmployeeInput;
}
