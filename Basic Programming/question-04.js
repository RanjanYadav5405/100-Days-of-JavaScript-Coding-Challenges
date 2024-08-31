// Create a JavaScript function that calculates the tip for a given bill amount and tip percentage. 
// Bill amount and tip percentage will be input parameters while output will be calculated tip value.

function CalculateBillTip(billAmount,tipPrecentage){
    if(typeof billAmount !== 'number' && typeof tipPrecentage !== "number"){
        return "Please provide valid number"

    }
    const tip = billAmount * (tipPrecentage / 100)
    return tip;
}

let bill = 1500;
let tipPercent = 20;
console.log(CalculateBillTip(bill,tipPercent))