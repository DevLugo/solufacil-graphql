import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DocumentWhereInput } from './document-where.input';
import { DocumentOrderByWithRelationInput } from './document-order-by-with-relation.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DocumentScalarFieldEnum } from './document-scalar-field.enum';

@ArgsType()
export class FindManyDocumentArgs {

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

    @Field(() => [DocumentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DocumentScalarFieldEnum>;
}
