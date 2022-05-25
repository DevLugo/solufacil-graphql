import { BorrowerWhereInput } from 'src/@generated/borrower/borrower-where.input';
import { BorrowerCreateInput } from '../../@generated/borrower/borrower-create.input';
import { BorrowerService } from './borrower.service';
export declare class BorrowerResolver {
    private readonly borrowerService;
    constructor(borrowerService: BorrowerService);
    borrowers(where: BorrowerWhereInput): Promise<import(".prisma/client").Borrower[]>;
    createBorrower(data: BorrowerCreateInput): Promise<import(".prisma/client").Borrower>;
}
