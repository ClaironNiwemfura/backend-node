import userModel from "../models/user.js"

const createUser=async(req,res)=>{
    try{
        const existingUser = await userModel.findOne({ email: req.body.email });
        if (existingUser) {
          return res.status(409).json({
            message: 'User already exists',
          });
        }

        const userInstance =new userModel({
            names:req.body.names,
            email:req.body.email,
            password:req.body.password
        });
        let response =await userInstance.save()
        res.status(200).json({
            message:"user is created",
            response:response
        })
    }catch(error){
        console.log("error occured"),
        res.status(500).json({
            message:"error occured"
        })
    }
}
export default createUser;