import mongoose from "mongoose"

const createUser =new mongoose.Schema({
    names:{
        type:String,
        required:"your name required"
    },
    email:{
        type:String,
        required:"your email required"
    },
    password:{
        type:String,
        required:"your password required"
    }
    
});
export default mongoose.model("user", createUser);