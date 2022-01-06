import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentUpdateWithoutEmployeeInput } from './document-update-without-employee.input';

@InputType()
export class DocumentUpdateWithWhereUniqueWithoutEmployeeInput {

    @Field(() => DocumentWhereUniqueInput, {nullable:false})
    where!: DocumentWhereUniqueInput;

    @Field(() => DocumentUpdateWithoutEmployeeInput, {nullable:false})
    data!: DocumentUpdateWithoutEmployeeInput;
}
