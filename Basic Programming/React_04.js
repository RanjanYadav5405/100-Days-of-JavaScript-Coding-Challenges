// Develop a currency converter application that allows users to input an amount in one currency and convert it to another. For the sake of this challenge, you can use a hard-coded exchange rate. Take advantage of React state and event handlers to manage the input and conversion calculations.

import React, { useState } from 'react';

export default function App() {
  const [amount, setAmount] = useState(0);
  const [convertAmount, setConvertAmount] = useState(0)
  const ExchangeRate = 0.85

  const handleSubmitChange = (event) => {
    setAmount(event.target.value)
  }

  const currencyConvert = () =>{
    setConvertAmount(amount * ExchangeRate)
  }
  return(
    <div>
      <h1>Currency Converter</h1>
      <input type='number' value={amount} onChange={handleSubmitChange}/>
      <button onClick={currencyConvert}>Exchange Currency</button> 
      <p>Converted Amount: {convertAmount}</p>
    </div>
  )


}
