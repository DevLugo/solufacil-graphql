import { PhoneWhereInput } from './phone-where.input';
import { PhoneOrderByWithRelationInput } from './phone-order-by-with-relation.input';
import { PhoneWhereUniqueInput } from './phone-where-unique.input';
import { PhoneScalarFieldEnum } from './phone-scalar-field.enum';
export declare class FindManyPhoneArgs {
    where?: PhoneWhereInput;
    orderBy?: Array<PhoneOrderByWithRelationInput>;
    cursor?: PhoneWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof PhoneScalarFieldEnum>;
}
