import { Injectable } from '@nestjs/common';
import { PhoneCreateInput } from '../../@generated/phone/phone-create.input';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class PhoneService {
    constructor(private readonly _db: PrismaService){}

    async createPhone(data: PhoneCreateInput){
        return await this._db.phone.create({
            data:{
                number: data.number,
                borrowerId: data.borrowerId
            }
        });
    }
}
