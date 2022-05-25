import { PhoneCreateInput } from '../../@generated/phone/phone-create.input';
import { PrismaService } from '../../core/prisma/prisma.service';
export declare class PhoneService {
    private readonly _db;
    constructor(_db: PrismaService);
    createPhone(data: PhoneCreateInput): Promise<import(".prisma/client").Phone>;
}
