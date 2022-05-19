import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DocumentType } from '../prisma/document-type.enum';

@ObjectType()
export class DocumentMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => DocumentType, {nullable:true})
    type?: keyof typeof DocumentType;

    @Field(() => String, {nullable:true})
    borrowerId?: string;

    @Field(() => String, {nullable:true})
    avalId?: string;

    @Field(() => String, {nullable:true})
    contractId?: string;

    @Field(() => String, {nullable:true})
    employeeId?: string;
}
