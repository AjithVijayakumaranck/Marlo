import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import instance from '../AxiosInstance/instance'

const Signup = () => {

  const navigate = useNavigate()
  useEffect(() => {
    if(localStorage.getItem("logged")){
       navigate('/')
    }else{
      navigate('/signup')
    }
  

  }, [])
  const [form,setForm] = useState({
    email:"",
    password:"",
    Phone:"",
    Lastname:"",
    Firstname:"",
    company:""
   })

    let submitHandler = (e) => {
        e.preventDefault()
        console.log("helllo");
        instance.post('signup',form).then(()=>{
            navigate('/login')
        }).catch(()=>{
            navigate('/login')
        })
    }
  return (
    <div className='flex justify-evenly items-center h-screen'>
       <div>
       <h1 className='font-bold text-[5rem] text-purple-700'>signUp</h1>
        <h5>already have account?<Link to='/login'><span className='text-purple-700' >Login</span></Link></h5>
       </div>
       
      <div className='h-[30rem]  w-[40rem] flex justify-center items-center'>
      <form onSubmit={submitHandler}> 
  <div className='flex gap-2'>
<div>
<label htmlFor="" className='text-purple-800 font-semibold px-3' >First Name</label>
       <div className='py-4'>
       <input type="text" placeholder='First name' value={form.Firstname} onChange={(e)=>{
       setForm({...form,Firstname:e.target.value})
       }} className='shadow-md px-10 outline-none py-2 bg-slate-100' required/>
       </div>
</div>
    <div>
    <label htmlFor="" className='text-purple-800 font-semibold px-3' >Last Name</label>
       <div className='py-4'>
       <input type="text" placeholder='last Name' value={form.Lastname} onChange={(e)=>{
       setForm({...form,Lastname:e.target.value})
       }} className='shadow-md px-10 outline-none py-2 bg-slate-100' required/>
       </div>
    </div>
  </div>
  <div className='flex gap-2'>
<div>
<label htmlFor="" className='text-purple-800 font-semibold px-3' >Email</label>
       <div className='py-4'>
       <input type="email" placeholder='emailId' value={form.email} onChange={(e)=>{
       setForm({...form,email:e.target.value})
       }} className='shadow-md px-10 outline-none py-2 bg-slate-100' required/>
       </div>
</div>
    <div>
    <label htmlFor="" className='text-purple-800 font-semibold px-3' >phone Number</label>
       <div className='py-4'>
       <input type="number" placeholder='Phonenumber' value={form.phone} onChange={(e)=>{
       setForm({...form,Phone:e.target.value})
       }} className='shadow-md px-10 outline-none py-2 bg-slate-100' required/>
       </div>
    </div>
  </div>
  
<div>
<label htmlFor="" className='text-purple-800 font-semibold px-3' >Company Name</label>
       <div className='py-4'>
       <input type="text" placeholder='Company Name' value={form.company} onChange={(e)=>{
       setForm({...form,company:e.target.value})
       }} className='shadow-md px-10 outline-none py-2 bg-slate-100 w-full' required/>
       </div>
  </div>
    <div>
    <label htmlFor="" className='text-purple-800 font-semibold px-3' >Password</label>
       <div className='py-4 w-full'>
       <input type="password" placeholder='password'  value={form.password} onChange={(e)=>{
       setForm({...form,password:e.target.value})
       }} className='shadow-md px-10 outline-none py-2 bg-slate-100 w-full' required/>
       </div>
    </div>

       <button className='bg-purple-700 rounded px-2 py-1 text-white mt-4'>signup</button>
     </form>


      </div>

    </div>
  )
}

export default Signup