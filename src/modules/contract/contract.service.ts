import { Injectable } from '@nestjs/common';
import { ContractWhereInput } from 'src/@generated/contract/contract-where.input';
import { PrismaService } from '../../core/prisma/prisma.service';
import { ContractCreateInput } from './inputs/contractCreateInput';

@Injectable()
export class ContractService {
    constructor(private readonly _db: PrismaService){}

    async create(data: ContractCreateInput) {
        const { contractTypeId, borrowerId, employeeId, signDate } = data;
        const existBorrower = await this._db.borrower.findUnique({where:{id:borrowerId}})
        if (!existBorrower) throw new Error("Invalid BorrowerId")
        const { monthDuration } = await this._db.contractType.findFirst({
            where: {
                id: data.contractTypeId
            },
            rejectOnNotFound: true
        })
        const signDateObj = new Date(signDate);
        const dueDate = new Date(signDate);
        dueDate.setMonth(dueDate.getMonth() + monthDuration);
        return await this._db.contract.create(
            {data: {
                dueDate,
                signDate:signDateObj,
                employee: {
                    connect:{
                        id:employeeId
                    }
                },
                borrower: {
                    connect:{
                        id: borrowerId
                    }
                },
                contractType:{
                    connect:{
                        id: contractTypeId
                    }
                }, 
            },
        include: {borrower:true, contractType:true}});
    }

    async getMany(where: ContractWhereInput) {
        return await this._db.contract.findMany({where, 
        include: {borrower:true, contractType:true} });
    }
}