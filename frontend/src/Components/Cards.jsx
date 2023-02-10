import React from 'react'
import { useNavigate } from 'react-router-dom'
import instance from '../AxiosInstance/instance'


const Cards = ({info,setState}) => {
  const nav = useNavigate()
  let deleteHandler = (userId) => {
    instance.delete(`deleteUser/${userId}`).then(()=>{
     localStorage.clear()
   nav('/signup')
   })
  }


  return (
    <div className='flex p-2 shadow-md items-center'>
    <div className='bg-purple-700 h-16 w-16 rounded-md text-white flex justify-center items-center '>
        <h1>{}</h1>
     </div>
   
<div>
<div className=' pl-5 flex justify-between  items-center text-sm py-5'>
       <h2 className='px-4 text-center'>FirstName<h4 className='text-purple-700'>{info.firstname}</h4></h2>
       <h2 className='px-4 text-center'>LastName<h4 className='text-purple-700'>{info.lastname}</h4></h2>
     </div>
<div className=' pl-5 flex justify-between  items-center text-sm'>
       <h2 className='px-4 text-center'>email<h4 className='text-purple-700'>{info.company}</h4></h2>
       <h2 className='px-4 text-center'>Phone<h4 className='text-purple-700'>{info.phone}</h4></h2>
     </div>
</div>
    
        <div className='flex items-center'>
        <button className='bg-purple-700 text-white rounded px-1 hover:bg-red-600' onClick={()=>{
            deleteHandler(info._id)
        }}>delete</button>
        </div>
     
    </div>
  )
}

export default Cards