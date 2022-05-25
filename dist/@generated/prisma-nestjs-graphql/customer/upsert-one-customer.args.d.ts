import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerCreateInput } from './customer-create.input';
import { CustomerUpdateInput } from './customer-update.input';
export declare class UpsertOneCustomerArgs {
    where: CustomerWhereUniqueInput;
    create: CustomerCreateInput;
    update: CustomerUpdateInput;
}
