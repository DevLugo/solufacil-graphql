import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DocumentWhereInput } from './document-where.input';
import { DocumentOrderByWithRelationInput } from './document-order-by-with-relation.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DocumentCountAggregateInput } from './document-count-aggregate.input';
import { DocumentMinAggregateInput } from './document-min-aggregate.input';
import { DocumentMaxAggregateInput } from './document-max-aggregate.input';

@ArgsType()
export class DocumentAggregateArgs {

    @Field(() => DocumentWhereInput, {nullable:true})
    where?: DocumentWhereInput;

    @Field(() => [DocumentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DocumentOrderByWithRelationInput>;

    @Field(() => DocumentWhereUniqueInput, {nullable:true})
    cursor?: DocumentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DocumentCountAggregateInput, {nullable:true})
    _count?: DocumentCountAggregateInput;

    @Field(() => DocumentMinAggregateInput, {nullable:true})
    _min?: DocumentMinAggregateInput;

    @Field(() => DocumentMaxAggregateInput, {nullable:true})
    _max?: DocumentMaxAggregateInput;
}
