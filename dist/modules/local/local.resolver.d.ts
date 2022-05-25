import { LocalCreateInput } from '../../@generated/local/local-create.input';
import { LocalWhereInput } from '../../@generated/local/local-where.input';
import { LocalService } from './local.service';
export declare class LocalResolver {
    private readonly LocaService;
    constructor(LocaService: LocalService);
    createLocal(data: LocalCreateInput): Promise<import(".prisma/client").Local>;
    locals(where: LocalWhereInput): Promise<import(".prisma/client").Local[]>;
}
