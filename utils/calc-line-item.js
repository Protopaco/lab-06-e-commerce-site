
export function calcLineItem(quantity, amount) {
    let returnValue = quantity * amount;
    return Math.round(returnValue * 100) / 100;
}