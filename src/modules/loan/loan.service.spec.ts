import { PrismaService } from '../../core/prisma/prisma.service';
import { PaymentScheduleService } from '../payment-schedule/payment-schedule.service';
import { LoanService } from './loan.service';
import { Decimal } from '@prisma/client/runtime';
import { CreateLoansProcess } from './types';


describe('LoanService', () => {
    let loanService: LoanService;
    const db = new PrismaService();
    const _paymentScheduleService = new PaymentScheduleService(db);

    beforeEach(() => {

        // create new UtilsService service and inject the new services
        loanService = new LoanService(db, _paymentScheduleService);

    });

    //LoanCreateInput
    describe('createLoansProcess', () => {
        //jest.setTimeout(10000);

        it('should create loans and return an array of loan objects', async () => {
            //const formattedFirstPaymentDate = formatDate(firstPaymentDate);
            const loansData: CreateLoansProcess[] = [
                {
                    borrowerId: '1',
                    amountGived: new Decimal(3000), // convert number to Decimal
                    signDate: '2022-06-12',
                    firstPaymentDate: '2022-06-18',
                    loanTypeId: '14',
                    grantorId: '1',
                    contractId: '1',
                    loanLeadId: '1',
                },
            ];
            const createdLoans = await loanService.createLoansProcess(loansData);
            expect(createdLoans).toBeInstanceOf(Array);
            expect(createdLoans.length).toBe(loansData.length);
            let idx = 0;
            for await (const loan of createdLoans) {
                expect(loan).toHaveProperty('id');
                expect(loan).toHaveProperty('createdAt');
                expect(loan).toHaveProperty('updatedAt');
                expect(loan).toHaveProperty('paymentSchedule');

                // retrieve the payment schedule for the loan and test it
                expect(loan.paymentSchedule).toBeInstanceOf(Array);
                const loanType = await db.loantype.findFirst({ where: { id: { equals: loansData[idx].loanTypeId } } });
                expect(loan.paymentSchedule.length).toBe(loanType.weekDuration);
                const amountGiven = +loansData[idx].amountGived;
                const firstPaymentDate = +loansData[idx].firstPaymentDate;
                const firstPaymentDateObject = new Date(firstPaymentDate);
                const totalAmountToPay = (amountGiven * loanType.rate) + amountGiven;
                const weeklyPaymentAmount = new Decimal(totalAmountToPay / loanType.weekDuration)
                await loan.paymentSchedule.forEach(async (payment, i) => {
                    const percentegeToPaid = _paymentScheduleService.calculatePayedPercentege(+weeklyPaymentAmount, +totalAmountToPay);
                    let dueDate = new Date(firstPaymentDateObject.getTime());
                    //console.log("firstDate", firstPaymentDateObject)
                    dueDate.setDate(firstPaymentDateObject.getDate() + ((i + 1) * 7));

                    const profit = _paymentScheduleService.getPercentageOf(percentegeToPaid, Number(loan.totalProfitAmount));
                    const returnToCapital = +weeklyPaymentAmount - Number(profit);
                    expect(payment.numeration).toEqual(i + 1);
                    expect(new Decimal(payment.amountToPay)).toEqual(weeklyPaymentAmount);
                    expect(new Decimal(payment.paidAmount)).toEqual(new Decimal(0));
                    expect(new Decimal(payment.returnToCapital)).toEqual(new Decimal(returnToCapital.toFixed(2)));
                    expect(new Decimal(payment.profit)).toEqual(new Decimal(+profit));
                    expect(new Date(payment.dueDate)).toEqual(dueDate);
                })
                idx++;
            }
        });
    });
});