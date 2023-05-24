import mongoose  from "mongoose"

const logUser =new mongoose.Schema({
    email:{
        type:String,
        required:"your email required"
    },
    password:{
        type:String,
        required:"your password required"
    }
    
});

export default mongoose.model("luser", logUser);