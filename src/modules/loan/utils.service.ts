import { Field, Float, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class PaymentBreakDown {

    @Field(() => Float, {nullable:false})
    amount!: Number;
    @Field(() => Float, {nullable:false})
    profit!: Number;
    @Field(() => Float, {nullable:false})
    returnOfCapital!: Number;

}


export class UtilsService {
    constructor(
    ){}
    paymentBreakDown(amount:Number, rate:number): PaymentBreakDown {
        //(1000*.2)/12 * 10
        //(650*.3)/13 * 10
        const profit = (Number(amount) / rate) / Number((10 + (rate * 10) * 10));
        const returnOfCapital = Number(amount)-profit;
        const breakDown:PaymentBreakDown = {
            amount: Number(amount.toFixed(2)), 
            profit: Number(profit.toFixed(2)),
            returnOfCapital: Number(returnOfCapital.toFixed(2))
        }
        return breakDown
    }

}