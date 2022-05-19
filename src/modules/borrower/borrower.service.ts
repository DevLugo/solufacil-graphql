import { BorrowerWhereInput } from '../../@generated/borrower/borrower-where.input';
import { BorrowerCreateInput } from '../../@generated/borrower/borrower-create.input';
import { PrismaService } from '../../core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BorrowerService {
    constructor(private readonly db: PrismaService) {}

    async create(data: BorrowerCreateInput) {
        // Validate unique email
        if (!!data.email){
            const dbEmail = await this.db.borrower.findUnique({
                where: {email: data.email},
            });
            if (!!dbEmail)
                throw new Error(`El email ${dbEmail.email} ya existe`);
        }
        //Validate  Unique Phone number
        for(const phone of data.phones.create){
            const dbPhone = await this.db.phone.findUnique({
                where: {number: phone.number}
            });
            if (!!dbPhone)
                throw new Error(`El télefono ${dbPhone.number} ya existe`);
        }
        
        return await this.db.borrower.create({data:{
            name: data.name,
            address: data.address
        }});
    }
      
    async getMany(data:BorrowerWhereInput) {
        return await this.db.borrower.findMany({where:data});
    }

}
