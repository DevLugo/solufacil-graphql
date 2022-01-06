import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentType } from '../prisma/document-type.enum';

@InputType()
export class DocumentCreateManyBorrowerInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => DocumentType, {nullable:false})
    type!: keyof typeof DocumentType;

    @Field(() => String, {nullable:true})
    avalId?: string;

    @Field(() => String, {nullable:true})
    contractId?: string;

    @Field(() => String, {nullable:true})
    employeeId?: string;
}
