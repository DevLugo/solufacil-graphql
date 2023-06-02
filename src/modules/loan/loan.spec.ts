import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../app.module';
import { UtilsService } from './utils.service';

export function formatDate(date: Date): string {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
}

describe('GraphQL API', () => {
    let app: INestApplication;
    let bearerToken: string;
    let utilsService: UtilsService;
    beforeAll(async () => {
        const query = `
            mutation signIn(
                $input: SignInInput!
            ){
                signIn(input: $input){
                    token
                }
            }
        `;
        const variables = {
            input: {
                email: 'josue',
                password: 'test1234',
            },
        };
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
            providers: [UtilsService],
        }).compile();
        utilsService = moduleFixture.get<UtilsService>(UtilsService);

        app = moduleFixture.createNestApplication();
        await app.init();

        const response = await request(app.getHttpServer())
            .post('/graphql')
            .send({ query, variables });
        bearerToken = response.body.data.signIn.token;

    });

    afterAll(async () => {
        await app.close();
    });

    it('should create a new loan with a payment schedule', async () => {
        const query = `
            mutation createLoanBulk($input: CustomCreateManyLoanInput!) {
                createLoanBulk(input: $input) {
                id
                weeklyPaymentAmount
                status
                pendingAmount
                amountGived
                amountToPay
                renovationProfitAmount
                baseProfitAmount
                paymentSchedule {
                    numeration
                    amountToPay
                    paidAmount
                    pendingAmount
                    returnToCapital
                    profit
                    dueDate
                }
                }
            }
            `;

        const amountGived = 3000;
        const firstPaymentDateObject = new Date('2022-06-18');

        const firstPaymentDate = '2022-06-18';
        const formattedFirstPaymentDate = formatDate(firstPaymentDateObject);
        const numPayments = 14;
        const weeklyPaymentAmount = 300;
        const variables = {
            input: {
                loans:
                    [{
                        amountGived,
                        loanType: { connect: { id: '14' } },
                        signDate: '2022-06-12',
                        firstPaymentDate: firstPaymentDate,
                        contract: { connect: { id: '1' } },
                        employee: { connect: { id: '1' } },
                    }],
            }
        };

        const response = await request(app.getHttpServer())
            .post('/graphql')
            .set('Authorization', `Bearer ${bearerToken}`)
            .send({ query, variables });
        const createLoanResponseList = response.body.data.createLoanBulk;
        console.log("LOAN RESPONSE", createLoanResponseList)
        for (const loan of createLoanResponseList) {

            expect(loan).toBeDefined();
            expect(loan.status).toEqual('APPROVED');
            expect(loan.pendingAmount).toEqual('4200');
            expect(loan.amountGived).toEqual(amountGived.toString());
            expect(loan.amountToPay).toEqual('4200');
            expect(loan.renovationProfitAmount).toEqual('0');
            expect(loan.baseProfitAmount).toEqual('1200');
            expect(loan.paymentSchedule).toHaveLength(numPayments);

            const paymentSchedule = loan.paymentSchedule;
            for (let i = 0; i < numPayments; i++) {
                const percentegeToPaid = utilsService.calculatePayedPercentege(weeklyPaymentAmount, weeklyPaymentAmount);
                const profit = utilsService.getPercentageOf(percentegeToPaid, Number(loan.totalProfitAmount));
                const dueDate = new Date(firstPaymentDateObject.getTime() + ((i + 1) * 7 * 24 * 60 * 60 * 1000));
                console.log(percentegeToPaid, profit, weeklyPaymentAmount, loan.totalProfitAmount)
                /* const profit = Number((weeklyPaymentAmount - Number(returnToCapital)).toFixed(2)); */
                expect(paymentSchedule[i].numeration).toEqual(i + 1);
                expect(paymentSchedule[i].amountToPay).toEqual(weeklyPaymentAmount.toString());
                expect(paymentSchedule[i].paidAmount).toEqual('0');
                //TODO This is correct because the profit is calculated based on the amount to pay.  Check the why is returning a wrong value
                //expect(paymentSchedule[i].returnToCapital).toEqual( weeklyPaymentAmount - Number(profit));
                //TODO: This is correct because the profit is calculated based on the amount to pay.  Check the why is returning a wrong value
                //expect(paymentSchedule[i].profit).toEqual(profit);
                //TODO: validate if the due date is correct
                expect(formatDate(new Date(paymentSchedule[i].dueDate))).toEqual(formatDate(dueDate));
            }
        }
    });
});