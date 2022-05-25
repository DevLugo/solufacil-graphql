import { LogWhereInput } from './log-where.input';
import { LogOrderByWithRelationInput } from './log-order-by-with-relation.input';
import { LogWhereUniqueInput } from './log-where-unique.input';
import { LogScalarFieldEnum } from './log-scalar-field.enum';
export declare class FindFirstLogArgs {
    where?: LogWhereInput;
    orderBy?: Array<LogOrderByWithRelationInput>;
    cursor?: LogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof LogScalarFieldEnum>;
}
