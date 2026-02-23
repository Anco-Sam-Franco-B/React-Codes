import React, { useState } from 'react'

function PersonData() {
    const [formData, setFormData]=useState({
        fullname: '',
        email: '',
        age: '',
        isActive: false
    })

    const [userAccount, setUserAccount]=useState([])

    const SubmitAccount=(event)=>{
            event.preventDefault()
            setUserAccount([...userAccount, {
                id: userAccount.length + 1,
                fullname: formData.fullname,
                email: formData.email,
                age: formData.age,
                isActive: formData.isActive
            }])
            setFormData({
                fullname: '',
                email: '',
                age: '',
                isActive: false
            })
    }

  return (
    <div className='flex gap-2'>
        <div className="m-5 w-[350px] flex flex-col gap-3">
            <h1 className='text-2xl text-center font-bold'>User Form</h1>
            <div className=" flex flex-col gap-2">
                <input type="text" className='border-2 border-black p-2' value={formData.fullname} onChange={e=>setFormData({...formData, fullname: e.target.value})} name='fullname' placeholder='Fullname' />
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
        <div className="w-full pr-5">
            <h1 className='text-2xl font-bold mt-5'>User Account Info.</h1>
            <table className='w-full mt-5'>
                <thead>
                    <tr className='bg-gray-100'>
                        <th className='p-2'>ID</th>
                        <th className='p-2'>Fullname</th>
                        <th className='p-2'>Email</th>
                        <th className='p-2'>Age</th>
                        <th className='p-2'>Status</th>
                        <th className='p-2'>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            userAccount.map((data, index)=>(
                                <tr>
                                    <td className='p-2 border-b-2 border-r-2'>{data.id}</td>
                                    <td className='p-2 border-b-2'>{data.fullname}</td>
                                    <td className='p-2 border-b-2'>{data.email}</td>
                                    <td className='p-2 border-b-2'>{data.age}</td>
                                    <td className='p-2 border-b-2'>{data.isActive===false ? 'Inactive' : 'active'}</td>
                                    <td className='p-2 border-b-2 border-l-2'></td>
                                </tr>
                            ))
                        }
                    </tbody>
            </table>
        </div>
    </div>
  )
}

export default PersonData
