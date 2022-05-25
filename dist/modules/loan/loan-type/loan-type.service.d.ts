import { LoantypeWhereInput } from '../../../@generated/loantype/loantype-where.input';
import { LoantypeCreateInput } from '../../../@generated/loantype/loantype-create.input';
import { PrismaService } from '../../../core/prisma/prisma.service';
export declare class LoanTypeService {
    private readonly db;
    constructor(db: PrismaService);
    getMany(where: LoantypeWhereInput): Promise<import(".prisma/client").Loantype[]>;
    get(id: string): Promise<import(".prisma/client").Loantype>;
    create(data: LoantypeCreateInput): Promise<import(".prisma/client").Loantype>;
}
