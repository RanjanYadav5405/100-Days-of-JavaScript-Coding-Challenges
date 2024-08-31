// What will be the output when the user types in the input field:

import React,{useState} from 'react'

export default function App(){
   const[value, setValue] = useState('')

   function handleChange(event){
    setValue(event.target.value)
   }
   return(
    <div>
      <input type='text' value={value} onChange={handleChange}/>
      <p>You enterd: {value}</p>
    </div>
   )
}