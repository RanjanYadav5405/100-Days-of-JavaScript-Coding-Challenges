//* Programming Challenge: Simple Currency Converter
//*
//? Write a function to convert an amount from one currency to another using static exchange rates.
//* Requirements:
//? Write a function named convertCurrency that takes three parameters: amount, fromCurrency, and toCurrency.
//? Use a fixed object to store exchange rates relative to a base currency (e-g•, USD).
//? The function should return the converted amount in the target currency.
// Handle conversion through USD as a base, meaning if converting from GBP tO EUR, first convert GRP. t Pull up for precise seeking

const rates = {
USD: 1,// Base currency
EUR: 0.9,// 1 USD = 0.9 EUR
GBP: 0.8,// 1 USD = 0.8 EUR
INR: 82, // 1 USD = 74 INR
}

const convertCurrency = (amount, fc, tc) => {
    console.log(Object.values(rates))
}

console.log(convertCurrency(100, "GBP", "EUR")); //Output will depend on the rates provided
