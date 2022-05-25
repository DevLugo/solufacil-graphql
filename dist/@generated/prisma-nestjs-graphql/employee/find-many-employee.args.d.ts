import { EmployeeWhereInput } from './employee-where.input';
import { EmployeeOrderByWithRelationInput } from './employee-order-by-with-relation.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeScalarFieldEnum } from './employee-scalar-field.enum';
export declare class FindManyEmployeeArgs {
    where?: EmployeeWhereInput;
    orderBy?: Array<EmployeeOrderByWithRelationInput>;
    cursor?: EmployeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof EmployeeScalarFieldEnum>;
}
