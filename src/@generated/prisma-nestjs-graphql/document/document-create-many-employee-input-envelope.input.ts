import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentCreateManyEmployeeInput } from './document-create-many-employee.input';

@InputType()
export class DocumentCreateManyEmployeeInputEnvelope {

    @Field(() => [DocumentCreateManyEmployeeInput], {nullable:false})
    data!: Array<DocumentCreateManyEmployeeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
