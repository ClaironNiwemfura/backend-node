console.log("clairon");
import express from "express"
import cors from "cors"
import welcome from "./controllers/welcome.js"
import articles from "./routes/articles.js" 
import mongoose from "mongoose"
import names from "./routes/articles.js"
import comment from "./routes/comment.js"
import user from "./routes/user.js"

const app = express();
app.use(cors());



const connecttoMongodb =()=>{
  mongoose.connect("mongodb+srv://clairon:Godisgood2244@cluster0.r1qucrs.mongodb.net/?retryWrites=true&w=majority")   
  .then(()=>{
    console.log("database connected successsfully");
  }).catch((err)=>{
    console.log("failed to connect the database",err);
  })

}



app.get("/api/v1/",welcome);
app.use("/api/v1/articles",articles);
app.use("/api/v1/names",names);
app.use("/api/v1/comment",comment)
// app.get("/api/v1/articles",readArticle)

app.use("/api/v1/user",user)


const port=3450;

app.listen(port,()=>{
    console.log("the server is running on port "+port)
    connecttoMongodb();
});