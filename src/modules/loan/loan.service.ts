import { Injectable } from '@nestjs/common';
import { LoanWhereInput } from '../../@generated/prisma-nestjs-graphql/loan/loan-where.input';
import { LoanPaymentCreateInput } from '../../@generated/prisma-nestjs-graphql/loan-payment/loan-payment-create.input';
import { LoanCreateInput } from '../../@generated/prisma-nestjs-graphql/loan/loan-create.input';
import { PrismaService } from '../../core/prisma/prisma.service';

@Injectable()
export class LoanService {
    constructor(private readonly db:PrismaService){}

    async getMany(where: LoanWhereInput){
        return await this.db.loan.findMany({where});
    }

    async create(data:LoanCreateInput){
        return await this.db.loan.create({data});
    }

    async createPayment(data:LoanPaymentCreateInput){
        return await this.db.loanPayment.create({data});
    }
}
