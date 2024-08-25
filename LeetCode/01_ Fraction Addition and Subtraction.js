// Fraction Addition and Subtraction

// Given a string expression representing an expression of fraction addition and subtraction, return the calculation result in string format.
// The final result should be an irreducible fraction. If your final result is an integer, change it to the format of a fraction that has a denominator 1. So in this case, 2 should be converted to 2/1.

 

// Example 1:

// Input: expression = "-1/2+1/2"
// Output: "0/1"
// Example 2:

// Input: expression = "-1/2+1/2+1/3"
// Output: "1/3"
// Example 3:

// Input: expression = "1/3-1/2"
// Output: "-1/6"
 

// Constraints:

// The input string only contains '0' to '9', '/', '+' and '-'. So does the output.
// Each fraction (input and output) has the format ±numerator/denominator. If the first input fraction or the output is positive, then '+' will be omitted.
// The input only contains valid irreducible fractions, where the numerator and denominator of each fraction will always be in the range [1, 10]. If the denominator is 1, it means this fraction is actually an integer in a fraction format defined above.
// The number of given fractions will be in the range [1, 10].
// The numerator and denominator of the final result are guaranteed to be valid and in the range of 32-bit in

//=========================================================================================================

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

function addFractions(n1, d1, n2, d2) {
    // Calculate the numerator and denominator
    let numerator = n1 * d2 + n2 * d1;
    let denominator = d1 * d2;

    // Reduce the fraction
    let divisor = gcd(numerator, denominator);
    numerator /= divisor;
    denominator /= divisor;

    return [numerator, denominator];
}

function fractionAddition(expression) {
    let numerator = 0, denominator = 1;
    let i = 0;

    while (i < expression.length) {
        let sign = 1;
        if (expression[i] === '-' || expression[i] === '+') {
            sign = expression[i] === '-' ? -1 : 1;
            i++;
        }

        // Extract numerator
        let n = 0;
        while (i < expression.length && expression[i] !== '/') {
            n = n * 10 + (expression.charCodeAt(i) - 48);
            i++;
        }
        n *= sign;
        i++; // skip '/'

        // Extract denominator
        let d = 0;
        while (i < expression.length && !isNaN(expression[i])) {
            d = d * 10 + (expression.charCodeAt(i) - 48);
            i++;
        }

        // Add the fraction to the result
        [numerator, denominator] = addFractions(numerator, denominator, n, d);
    }

    return `${numerator}/${denominator}`;
}

// Test cases
console.log(fractionAddition("-1/2+1/2"));  // Output: "0/1"
console.log(fractionAddition("-1/2+1/2+1/3"));  // Output: "1/3"
console.log(fractionAddition("1/3-1/2"));  // Output: "-1/6"
