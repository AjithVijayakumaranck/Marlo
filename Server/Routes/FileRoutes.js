const router = require('express').Router();
const jwt = require("jsonwebtoken")
const userControllers = require('../Controllers/userControllers');


// jwt authentication

const verifyToken = (req, res, next) => {
    console.log(req.headers,"hello headers");
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
        res.send("We need a token, please give it to us next time");
    } else {

        jwt.verify(token, process.env.JWTPRIVATEKEY, (err, decoded) => {
            if (err) {
                console.log("failed");
                res.status(401).json({ auth: false, message: "you are failed to authenticate" });
            } else {
               console.log("successdfully verifies");
                req.userId = decoded.id;
                next();
            }
        });
    }
}


router.post('/login',userControllers.login) //login route

router.get('/getusers/:id',verifyToken,userControllers.getUser) //usedetails route

router.delete('/deleteuser/:id',verifyToken,userControllers.deleteUser) //delete user softdelete

router.post('/signup',userControllers.signup) //signup route


module.exports = router
