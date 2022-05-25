import { BorrowerWhereInput } from '../../@generated/borrower/borrower-where.input';
import { BorrowerCreateInput } from '../../@generated/borrower/borrower-create.input';
import { PrismaService } from '../../core/prisma/prisma.service';
export declare class BorrowerService {
    private readonly db;
    constructor(db: PrismaService);
    create(data: BorrowerCreateInput): Promise<import(".prisma/client").Borrower>;
    getMany(data: BorrowerWhereInput): Promise<import(".prisma/client").Borrower[]>;
}
