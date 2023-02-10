const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId

// const LikeSchema = new mongoose.Schema({like:{type:ObjectId}});
// const LikeSh=mongoose.model('Like',LikeSchema)

const userModel =  new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    delete:{
        type:Boolean,
        default:false
    },
    password:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    Phone:{
        type:String,
        require:true
    },
    firstname:{
        type:String,
        require:true
    },
    company:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
},{ timestamps: true })

const user=mongoose.model('users',userModel)

module.exports={user};