const User = require('../Models/SignupModel')
const validator = require('validator')

const signupController = async (req, res) => {
    try {
        console.log(req.body)
        const { fname, lname, phone, password, cpassword } = req.body
        if (!fname || !lname || !phone || !password || !cpassword) {
            throw new Error("Please Fill all the fields")
        }

        if(!validator.isStrongPassword(password)){
            throw new Error("Password must contain Capital Letter , Numbers and Special Characters")
        }
        if(password !== cpassword){
            throw new Error("Password do not match")
        }



        const userData = await User.create({
            firstName: fname,
            lastName: lname,
            password: password,
            phone: phone
        })
     
        await userData.save();

        return res.status(200).json({
            data: userData
        })
    } catch (error) {
        res.status(400).json({
        error: error.message
        })
    }
}


const loginController = async (req,res)=>{
    try {
        const { phone, password } = req.body;

        if(!phone || !password){
            throw new Error("Please Fill All the fields");
        }

        const isExist = await User.findOne({ phone: phone})
        
        if(!isExist){
            throw new Error("Please Enter valid Credintails")
        }

        if(password !==isExist.password){
            throw new Error("Please Enter valid Credintails")
        }

        return res.status(200).json("login Successfully")
    
    } catch (error) {
        res.status(401).json({
            message:error.message
        })
    }
}

module.exports = { signupController , loginController }