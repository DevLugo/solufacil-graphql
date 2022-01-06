import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DocumentType } from '../prisma/document-type.enum';
import { DocumentCountAggregate } from './document-count-aggregate.output';
import { DocumentMinAggregate } from './document-min-aggregate.output';
import { DocumentMaxAggregate } from './document-max-aggregate.output';

@ObjectType()
export class DocumentGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => DocumentType, {nullable:false})
    type!: keyof typeof DocumentType;

    @Field(() => String, {nullable:true})
    borrowerId?: string;

    @Field(() => String, {nullable:true})
    avalId?: string;

    @Field(() => String, {nullable:true})
    contractId?: string;

    @Field(() => String, {nullable:true})
    employeeId?: string;

    @Field(() => DocumentCountAggregate, {nullable:true})
    _count?: DocumentCountAggregate;

    @Field(() => DocumentMinAggregate, {nullable:true})
    _min?: DocumentMinAggregate;

    @Field(() => DocumentMaxAggregate, {nullable:true})
    _max?: DocumentMaxAggregate;
}
