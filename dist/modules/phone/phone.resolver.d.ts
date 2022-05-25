import { PhoneCreateInput } from '../../@generated/phone/phone-create.input';
import { PhoneService } from './phone.service';
export declare class PhoneResolver {
    private readonly _phoneService;
    constructor(_phoneService: PhoneService);
    createPhone(data: PhoneCreateInput): Promise<import(".prisma/client").Phone>;
}
