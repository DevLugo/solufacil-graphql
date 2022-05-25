import { LoantypeWhereInput } from './loantype-where.input';
import { LoantypeOrderByWithRelationInput } from './loantype-order-by-with-relation.input';
import { LoantypeWhereUniqueInput } from './loantype-where-unique.input';
import { LoantypeScalarFieldEnum } from './loantype-scalar-field.enum';
export declare class FindFirstLoantypeArgs {
    where?: LoantypeWhereInput;
    orderBy?: Array<LoantypeOrderByWithRelationInput>;
    cursor?: LoantypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof LoantypeScalarFieldEnum>;
}
