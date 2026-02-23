import React, { useState } from 'react'

function StateHook() {
  const [data, setData]=useState("hello world!")
  const [count,setCount]=useState(2)
  const [inputData, setInputData]=useState("")

  return (
    <div>
      {data} <br />
      <button onClick={()=> setData("Welcome")}>Click Me</button>
      <br/>
      <br/>
      <p>Count:  {count}</p>
      <button onClick={()=> setCount( count  + 2)}>Count</button>

      <hr />
      <input type="text" name="type" value={inputData} onChange={(e)=>setInputData(e.target.value)} placeholder='type anything' />
      {inputData}
    </div>
  )
}

export default StateHook
