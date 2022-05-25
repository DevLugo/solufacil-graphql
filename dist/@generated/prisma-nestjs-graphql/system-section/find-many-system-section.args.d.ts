import { SystemSectionWhereInput } from './system-section-where.input';
import { SystemSectionOrderByWithRelationInput } from './system-section-order-by-with-relation.input';
import { SystemSectionWhereUniqueInput } from './system-section-where-unique.input';
import { SystemSectionScalarFieldEnum } from './system-section-scalar-field.enum';
export declare class FindManySystemSectionArgs {
    where?: SystemSectionWhereInput;
    orderBy?: Array<SystemSectionOrderByWithRelationInput>;
    cursor?: SystemSectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof SystemSectionScalarFieldEnum>;
}
