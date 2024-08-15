// count button

import react, {useState, useEffect} from 'react'

export default function App() {
    const[count,setCount] = useState(0)
    useEffect(()=>{
        console.log("Component rendred Successfully!")
    },[])
  return (
      <div>
      <button onClick={() => setCount(count + 1)}> click me </button>
      <p> Button clicked {count} times </p>
      </div>
      );
}
