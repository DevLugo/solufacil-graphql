import { BorrowerWhereUniqueInput } from './borrower-where-unique.input';
import { BorrowerCreateInput } from './borrower-create.input';
import { BorrowerUpdateInput } from './borrower-update.input';
export declare class UpsertOneBorrowerArgs {
    where: BorrowerWhereUniqueInput;
    create: BorrowerCreateInput;
    update: BorrowerUpdateInput;
}
