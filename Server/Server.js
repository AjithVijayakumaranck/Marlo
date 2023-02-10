const express = require("express")
const app = express()
const cors = require("cors")
const fileRouter = require("./Routes/FileRoutes")
const dotenv = require("dotenv")
const path = require("path")


const Connect = require('./Connections/db')

//cors
app.use(cors())
app.use(express.json())
app.use('/api/files',express.static(path.join(__dirname,'StaticFiles/postImages')))




//db connect
dotenv.config()
Connect()


//routesmain
app.use('/api',fileRouter)

//server port
app.listen(5000,()=>{
    console.log('server connected at port 5000');
})