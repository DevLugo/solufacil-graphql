export function calculatePayedPercentege(amountToPay: number, totalAmount:number){
    try {
        return Number(((amountToPay * 100)/+totalAmount).toFixed(9));
    } catch (error) {
        return 0
    }
}

export function getPercentageOf(percent: number, total: number): Number{
    return Number(((percent/ 100) * total).toFixed(2));
}