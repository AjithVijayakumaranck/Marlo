import React, { useEffect, useState } from 'react'
import instance from '../AxiosInstance/instance'
import Cards from '../Components/Cards'
import Navbar from '../Components/Navbar'

const Home = () => {
    const [file,setFile]= useState(null)
  


    const [files,setFiles]=useState([])

    

    useEffect(() => {
      // console.log(localStorage.getItem("userId"),'userID');
       instance.get(`getusers/${localStorage.getItem("userId")}`).then((response)=>{
      console.log(response,"userInd")
       setFiles(response.data.userInfo)
      })
    }, [])
    
  return (
    <div>
    <Navbar file={file} setFile={setFile} setState={setFiles}/>
    <div className=' flex justify-center items-center  h-screen px-4 py-5'>
    {files===null ? <h1>no files yet </h1> :      
                <Cards info={files} setState={setFiles}/>

    }
    </div>
    </div>
  )
}

export default Home