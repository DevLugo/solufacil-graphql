import { Args, Query, Resolver } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../core/prisma/prisma.service';
import { LoanRenovationWhereInput } from './inputs/LoanRenovationWhereInput';
import { ILoanRenovationPayload } from './payloads/ILoanRenovationPayload';

@Resolver()
export class LoanRenovationResolver {
    constructor(
        private readonly _db:PrismaService,
    ){}

    @Query(() => ILoanRenovationPayload)
    async getLoanRenovationData(
        @Args({ name: 'where', type: () => LoanRenovationWhereInput})
        where:LoanRenovationWhereInput
    ){
        const loanToRenovate = await this._db.loan.findFirst({where:{id: where.loanToRenovate}});
        console.log("sssss",loanToRenovate);
        //TODO: Calculate the maxAmount available for the current borrower
        return {
            maxAmount: new Prisma.Decimal(1010),
            pendingAmount: loanToRenovate.pendingAmount,
            prevloan:loanToRenovate
        }
    }
}
