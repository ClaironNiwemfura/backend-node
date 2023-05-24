import mongoose from"mongoose"

const articleComment= new mongoose.Schema({
     email:{
        type:String,
        required:"email required"
     },
     comment:{
        type:String,
        required:"comment is required"
     },
     articleId:{
        type:String,
        required:"article Id required"
     }
});
export default mongoose.model("comments",articleComment);