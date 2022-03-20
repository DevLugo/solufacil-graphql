import { Injectable } from '@nestjs/common';
import { LoanWhereInput } from '../../@generated/prisma-nestjs-graphql/loan/loan-where.input';
import { LoanCreateInput } from '../../@generated/prisma-nestjs-graphql/loan/loan-create.input';
import { PrismaService } from '../../core/prisma/prisma.service';
import { LoanPaymentService } from './loan-payment/loan-payment.service';
import { CustomCreateLoanInput } from './CustomCreateLoanInput';
import { LoanState } from '@prisma/client';
import { PaymentScheduleService } from './payment-schedule/payment-schedule.service';

@Injectable()
export class LoanService {
    constructor(
        private readonly db:PrismaService,
        private readonly loanPaymentService: LoanPaymentService,
        private readonly paymentScheduleService: PaymentScheduleService

    ){}

    async getMany(where: LoanWhereInput){
        return await this.db.loan.findMany({where});
    }
    async get(id: string){
        return await this.db.loan.findUnique({where:{id}});
    }

    async createLoanProccess(data:CustomCreateLoanInput){
        const contract = await this.db.contract.findFirst({
            where: {
                id:data.contract.connect.id
            },
            include: {
                contractType:true
            }
        });
        if (contract.contractType.amount < data.amountToPay)
            throw new Error('La cantidad solicitada es mayor a la otorgada en el contrato: TODO: validar que solo tenga un credito activo a la vez');
        const {firstPaymentDate, ...cleanedData} = data;
        const loanType = await this.db.loantype.findFirst({where: {id:data.loanType.connect.id}});
        const weecklyPayment =  (data.amountToPay * (1+loanType.rate)) / loanType.weekDuration;
        const loan = await this.db.loan.create({
            data:{...cleanedData, status: LoanState.APPROVED, weeklyPaymentAmount: weecklyPayment}
        });

        await this.paymentScheduleService.createPaymentSchedule(new Date(data.firstPaymentDate), loanType.weekDuration, loan.id);
        return await this.db.loan.findUnique({where: {id:loan.id} ,include:{paymentSchedule:true, employee:{include:{user:true}}}});
    }

    async create(data:LoanCreateInput){
        return await this.db.loan.create({data});
    }
}
