import { Field, Float, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PaymentBreakDown {

    @Field(() => Float, {nullable:false})
    amount!: Number;
    @Field(() => Float, {nullable:false})
    profit!: number;
    @Field(() => Float, {nullable:false})
    returnOfCapital!: Number;

}


export class UtilsService {
    constructor(
    ){}
    paymentBreakDown(amount:Number, rate:number): PaymentBreakDown {
        //(1000*.2)/12 * 10;
        //(650*.3)/13 * 10;
        console.log(rate);
        const profit = (Number(amount) / rate) / Number((10 + (rate * 10) * 10));
        const returnOfCapital = Number(amount)-profit;
        const breakDown:PaymentBreakDown = {
            amount: Number(amount.toFixed(2)), 
            profit: Number(profit.toFixed(2)),
            returnOfCapital: Number(returnOfCapital.toFixed(2))
        }
        console.log("BREAKDOWN", breakDown);
        return breakDown
    }

    calculatePayedPercentege(amountToPay: number, totalAmount:number){
        try {
            return Number(((amountToPay * 100)/+totalAmount).toFixed(9));
        } catch (error) {
            return 0
        }
    }

    getPercentageOf(percent: number, total: number): Number{
        console.log(percent, total)
        return Number(((percent/ 100) * total).toFixed(2));
    }
}