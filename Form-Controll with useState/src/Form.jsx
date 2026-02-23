import React, { useState } from 'react'

function Form() {

    const [inputData, setInputData]=useState("")
    const [listData, setListData]=useState([])

    const handleSaveList=(e)=>{
        e.preventDefault()
        setListData([...listData, inputData])
        setInputData("")
    }

  return (
    <div>
      <input type="text" className='border-2 p-2 m-5 border-black' value={inputData} onChange={(e)=>setInputData(e.target.value)}  placeholder='Type anytext' name='inputData' />
      <button onClick={handleSaveList} className='p-2 bg-green-500 text-white'>Save List</button>
      <div className="p-5">
        <h1 className='text-2xl font-bold'>All Input Data Lists</h1>
        <div className="mt-4">
            <ol>
                {
                    listData.map((data, index)=>(
                        <li className='p-2 border-2 mb-1 border-black' key={index}>{index + 1}. {data}</li>
                    ))
                }
            </ol>
        </div>
      </div>
    </div>
  )
}

export default Form
