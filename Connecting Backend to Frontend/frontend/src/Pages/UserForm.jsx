import axios from 'axios'
import React, { useState } from 'react'

function UserForm() {
    const [formData, setFormData]=useState({
            fname: '',
            email: '',
            age: '',
            isActive: false
    })
    const SubmitAccount=(event)=>{
            event.preventDefault()
            axios.post('http://localhost:4000/create-user', formData)
            .then(res=>{
                alert(res.data.message)
            })
            .catch(err=>{
                console.log(err)
                alert("Failed to creat new user!")
            })

            setFormData({
                    fname: '',
                    email: '',
                    age: '',
                    isActive: false
            })
    }

  return (
    <div>
      <div className="m-5 w-[350px] flex flex-col gap-3">
            <h1 className='text-2xl text-center font-bold'>User Form</h1>
            <div className=" flex flex-col gap-2">
                <input type="text" className='border-2 border-black p-2' value={formData.fname} onChange={e=>setFormData({...formData, fname: e.target.value})} name='fullname' placeholder='Fullname' />
                <input type="email" className='border-2 border-black p-2' value={formData.email} onChange={e=>setFormData({...formData, email: e.target.value})} name='email' placeholder='Email Address' />
                <input type="number" className='border-2 border-black p-2' value={formData.age} onChange={e=>setFormData({...formData, age: e.target.value})} name='age' placeholder='Age' />
                <select className='border-2 border-black p-2' value={formData.isActive} onChange={e=>setFormData({...formData, isActive: e.target.value})} name="isActive">
                    <option value="">Select status</option>
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                </select>
                <button onClick={SubmitAccount} className='bg-green-500 text-white p-2'>Sumbit Account</button>
            </div>
        </div>
    </div>
  )
}

export default UserForm
