import { Injectable } from '@nestjs/common';
import { LoanPaymentWhereInput } from '../../../@generated/prisma-nestjs-graphql/loan-payment/loan-payment-where.input';
import { LoanPaymentCreateInput } from '../../../@generated/prisma-nestjs-graphql/loan-payment/loan-payment-create.input';
import { PrismaService } from '../../../core/prisma/prisma.service';

@Injectable()
export class LoanPaymentService {
    constructor(private readonly db:PrismaService){}

    async getMany(where:LoanPaymentWhereInput){
        return await this.db.loanPayment.findMany({
            where
        });
    }

    async create(data:LoanPaymentCreateInput){
        return await this.db.loanPayment.create({data});
    }
}
