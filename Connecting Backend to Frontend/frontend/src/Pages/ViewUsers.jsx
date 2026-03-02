import axios from "axios"
import { useEffect, useState } from "react"

function ViewUsers() {
    const [userAccount, setUserAccount]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/users')
        .then(res=>{
           setUserAccount(res.data.usersData) 
        })
        .catch(err=>{
            console.log(err)
            alert("Failed to fetch users data")
        })
    }, [userAccount])
    
    const deleteAccount=(accountId)=>{
            setUserAccount(userAccount.filter(user=> user.id !== accountId))
    }
  return (
    <div>
              <div className=" m-5">
            <h1 className='text-2xl font-bold'>User Accounts Info.</h1>
            <div className="mt-3 w-full">
                <table className='w-full'>
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
                                    <td>{index + 1}</td>
                                    <td>{data.fname}</td>
                                    <td>{data.email}</td>
                                    <td>{data.age}</td>
                                    <td className={`${data.status==='true'?'text-green-500':'text-red-500'} font-bold`}>{ data.status==='true'?'Online':'Offline'}</td>
                                    <td><button onClick={()=>deleteAccount(data.id)} className='p-2 bg-red-500 text-white rounded-md'>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ViewUsers
