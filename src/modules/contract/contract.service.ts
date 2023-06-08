import { Injectable } from '@nestjs/common';
import { Contract } from '@prisma/client';
import { PrismaService } from '../../core/prisma/prisma.service';
import { ContractCreateInput } from './types';

@Injectable()
export class ContractService {
    constructor(
        private readonly _db: PrismaService
    ) { }

    async create(data: ContractCreateInput) {
        const { contractTypeId, borrowerId, grantorId, signDate, loanLeadId } = data;
        const existBorrower = await this._db.borrower.findUnique({ where: { id: borrowerId } })
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
            {
                data: {
                    dueDate,
                    signDate: signDateObj,
                    grantor: {
                        connect: {
                            id: grantorId
                        }
                    },
                    loanLead: {
                        connect: {
                            id: loanLeadId
                        }
                    },
                    borrower: {
                        connect: {
                            id: borrowerId
                        }
                    },
                    contractType: {
                        connect: {
                            id: contractTypeId
                        }
                    },
                },
                include: { borrower: true, contractType: true }
            });
    }

    async getActiveContract(borrowerId: string, endDate: Date): Promise<Contract> {
        const activeContract = await this._db.contract.findFirstOrThrow({
            where: {
                borrowerId: borrowerId,
                dueDate: { gte: endDate },
            },
        });
        return activeContract;
    }
}
