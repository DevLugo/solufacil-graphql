import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateInput } from './user-create.input';
import { UserUpdateInput } from './user-update.input';
export declare class UpsertOneUserArgs {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
}
