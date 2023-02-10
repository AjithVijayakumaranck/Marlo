import React, { useEffect,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import instance from '../AxiosInstance/instance'

const Login = () => {
  const navigate = useNavigate()
    useEffect(() => {
      if(localStorage.getItem("logged")){
         console.log("inside if")
         navigate('/')
      }else{
        console.log("inside else")

         navigate('/login')
      }
    }, [])
   const [form,setForm] = useState({
    email:"",
    password:""
   })

    let submitHandler = (e) => {
        e.preventDefault()
        instance.post('login',form).then((response)=>{
            console.log(response,"hell");
             localStorage.setItem('logged',true)
             localStorage.setItem('userId',response.data.userId)
             localStorage.setItem('Token',response.data.token)
             navigate('/') 
        }).catch(()=>{
            navigate('/login')
        })
    }
  return (
    <div className='flex justify-evenly items-center h-screen'>
    <div>
    <h1 className='font-bold text-[5rem] text-purple-700'>Login</h1>
     <h5>dont have account?<Link to='/signup'><span className='text-purple-700' >signup</span></Link></h5>
    </div>
    
   <div className='h-[30rem]  w-[40rem] flex justify-center items-center'>
     <form onSubmit={submitHandler}> 
       <label htmlFor="" className='text-purple-800 font-semibold px-3' >Email</label>
       <div className='py-4'>
       <input type="text" placeholder='emailId' value={form.email} onChange={(e)=>{
       setForm({...form,email:e.target.value})
       }} className='shadow-md px-10 outline-none py-2 bg-slate-100'/>
       </div>
       <label htmlFor="" className='text-purple-800 font-semibold px-3'>Password</label>
       <div>
       <input type="password" placeholder='emailId' value={form.password} onChange={(e)=>{
       setForm({...form,password:e.target.value})
       }} className='shadow-md px-10 outline-none py-2 bg-slate-100'/>
       </div>
       <button className='bg-purple-700 rounded px-2 py-1 text-white mt-4'>Login</button>
     </form>


   </div>

 </div>
  )
}

export default Login