import { Args, Float, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Borrower } from 'src/@generated/borrower/borrower.model';
import { Loan } from 'src/@generated/loan/loan.model';
import { PaymentScheduleWhereInput } from 'src/@generated/payment-schedule/payment-schedule-where.input';
import { PaymentSchedule } from 'src/@generated/payment-schedule/payment-schedule.model';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { BorrowerService } from 'src/modules/borrower/borrower.service';
import { LoanService } from '../loan.service';
import { PaymentBreakDown, UtilsService } from '../utils.service';
import { RangeDaysInput } from './inputs/RangeDaysInput';
import { IResumePayload } from './payloads/resume';
import { PaymentScheduleService } from './payment-schedule.service';

@Resolver(() => PaymentSchedule)
export class PaymentScheduleResolver {
    constructor(
        private readonly UtilsService: UtilsService,
        private readonly LoanService: LoanService,
        private readonly BorrowerService: BorrowerService,
        private readonly _db: PrismaService,
        private readonly LoanPaymentScheduleService: PaymentScheduleService
        ){}
    @ResolveField(_ => PaymentBreakDown)
    async paymentBreakDown(@Parent() root: PaymentSchedule) {
        const { amountToPay } = root;
        const data = await this._db.loan.findFirst({
            where:{id:root.loanId},
            include:{
                loanType:true
            }
        });
        const rate = data.loanType.rate

        return this.UtilsService.paymentBreakDown(+amountToPay, rate);
    }
    

    @ResolveField(_ => Loan)
    async loan(@Parent() root: PaymentSchedule) {
        return await this.LoanService.get(root.loanId);
    }

    @ResolveField(_ => Number)
    async pendingAmount(@Parent() root: PaymentSchedule) {
        const payment = await this._db.paymentSchedule.findUnique({
            where: {
                id: root.id
            }
        });
        return Number(payment.amountToPay) - Number(payment.paidAmount); 
    }


    @ResolveField(_ => Borrower, {nullable:true})
    async borrower(@Parent() root: PaymentSchedule) {
        const data = await this._db.loan.findUnique({
            where: {
                id: root.loanId,
            },
            include: {
                contract: {
                    include: {
                        borrower:{
                            include:{
                                personalData:{
                                    include:{
                                        phones:true,
                                        },
                                    }
                                }
                            }
                        }
                    }
                }
            })
        return data.contract.borrower;
    }
    

    @Query(() => [PaymentSchedule])
    async paymentSchedulesWhere(
        @Args({ name: 'where', type: () =>PaymentScheduleWhereInput})
        where:PaymentScheduleWhereInput
    ) {
        return await this.LoanPaymentScheduleService.getPaymentSchedulesWhere(where);
    }

    @Query(() => IResumePayload)
    async rangeResume(
        @Args({ name: 'where', type: () => RangeDaysInput})
        where:RangeDaysInput
    ) {
        const { dateStart, dateEnd } = where;
        return await this.LoanPaymentScheduleService
            .rangeResume(new Date(dateStart),  new Date(dateEnd));
    }
}
