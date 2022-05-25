import { DocumentWhereInput } from './document-where.input';
import { DocumentOrderByWithRelationInput } from './document-order-by-with-relation.input';
import { DocumentWhereUniqueInput } from './document-where-unique.input';
import { DocumentScalarFieldEnum } from './document-scalar-field.enum';
export declare class FindManyDocumentArgs {
    where?: DocumentWhereInput;
    orderBy?: Array<DocumentOrderByWithRelationInput>;
    cursor?: DocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof DocumentScalarFieldEnum>;
}
