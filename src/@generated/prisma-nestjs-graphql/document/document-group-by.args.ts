import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DocumentWhereInput } from './document-where.input';
import { DocumentOrderByWithAggregationInput } from './document-order-by-with-aggregation.input';
import { DocumentScalarFieldEnum } from './document-scalar-field.enum';
import { DocumentScalarWhereWithAggregatesInput } from './document-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DocumentCountAggregateInput } from './document-count-aggregate.input';
import { DocumentMinAggregateInput } from './document-min-aggregate.input';
import { DocumentMaxAggregateInput } from './document-max-aggregate.input';

@ArgsType()
export class DocumentGroupByArgs {

    @Field(() => DocumentWhereInput, {nullable:true})
    where?: DocumentWhereInput;

    @Field(() => [DocumentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DocumentOrderByWithAggregationInput>;

    @Field(() => [DocumentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DocumentScalarFieldEnum>;

    @Field(() => DocumentScalarWhereWithAggregatesInput, {nullable:true})
    having?: DocumentScalarWhereWithAggregatesInput;

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
