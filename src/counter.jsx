import { useState } from "react"

export default function Counter(){
  const [count, setCount] = useState(0)

  function increment(){
    setCount((prev) => prev+1);
  }

  function decrement(){
    setCount((prev) => prev-1);
  }
    
    return(
        <>
        <h1>Counter App</h1>
        <h3>Count: {count}</h3>
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
        </>
    )
}