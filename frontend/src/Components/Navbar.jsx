import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import instance from '../AxiosInstance/instance'

const Navbar = ({file,setFile,setState}) => {



    const navigate = useNavigate()

  
 
 
  return (
    <div className='h-[4rem] w-full px-10 bg-purple-600 flex justify-end items-center'>
          
        <button onClick={(e)=>{
             e.preventDefault();
             localStorage.clear();
             navigate('/login')
        }} className='bg-white rounded-md px-3 font-medium cursor-pointer  mx-2'>logout</button>
 
      
    </div>
  )
}

export default Navbar