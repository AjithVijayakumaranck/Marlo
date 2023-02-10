const { user } = require("../modals/userModel")
const bcrypt = require("bcrypt")
const jwt  = require("jsonwebtoken")

module.exports = {
    signup: async (req, res) => {
        try {
            let { email,password,Phone,Lastname,Firstname,company } = req.body
            console.log(Phone);
            let userInfo = await user.findOne({ $or : [{email:email},{phone:Phone} ]})  // getting userdet to finde the email or phone is used already
            console.log(userInfo);
            if(userInfo){
                  console.log("use with this email or phone exist");
                  res.status(500).json({
                    message:"user with email or phone exist"
                  })
            }else{
                bcrypt.hash(password, 10, function (err, hashedPassword) {        // hashing password
                    console.log(hashedPassword);
                    let userTemplate = new user({
                        email: email,
                        password: hashedPassword,
                        lastname:Lastname,
                        firstname:Firstname,
                        company:company,
                        phone: Phone
                    })
                    userTemplate.save().then(() => {
                        console.log("saved");
                        res.status(200).json({message:"successfully signed up"})
                    }).catch((err) => {
                        console.log(err);
                        res.status(500).json({message:"internal server error"})
                    })
                });
            }
   
        } catch (error) {
            res.status(500)
        }

    },
    login: async (req, res) => {
        try {
            let { email, password } = req.body
            let userInfo = await user.findOne({ email: email ,delete:false })  

            if (userInfo) {
                bcrypt.compare(password, userInfo.password, function (err, result) {
                    if (result == true) {
                        
                        //jsonwtoken Signing
                        
                        const token = jwt.sign({
                        }, process.env.JWTPRIVATEKEY, {
                            expiresIn: 1000 * 60 * 60 * 24
                        });
                        res.status(200).json({token,userId:userInfo._id})
                    } else {
                        res.status(500).json({message:"internal error"})
                    }
                });
            } else {
                res.status(401)
            }
        } catch (error) {
              res.status(500).json({message:"internal server error"})
        }
    },

    getUser:async (req,res)=>{
        try {
            let userId= req.params.id
            console.log(userId);
            let userInfo = await  user.findOne({_id:userId})
            res.status(200).json({userInfo})
        } catch (error) {
            res.status(500).json({message:"internal server error"})
        }
    },
    deleteUser:(req,res)=>{
        try {
            console.log("deleted");
            let userId= req.params.id
            user.updateOne({_id:userId},{delete:true}).then(()=>{                         //with out delting from collection softdeleting here
                res.status(200).json({message:"user deleted successfully"})
            }).catch((err)=>{
                console.log("delteeee");
                res.status(500).json({message:"internal server error"})
            })
        } catch (error) {
            console.log("delte");
            res.status(500).json({message:"internal server error"})
        }
    }
}