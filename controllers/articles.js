import ArticleModel from"../models/articlemod.js"

const createArticle =async (req,res)=>{
 
    try{
        // const data=req.body;
        // console.log(data)
        // res.send(data);
    
        // res.send("this is the create article controller")

        // const articleInstance=new ArticleModel({
        //     title:req.body.title,
        //     content:req.body.content,
        //     author:req.body.author||"clairon",
        //     image:req.body.image
        // });
        // articleInstance.save()
        // .then((data)=>{
        //     res.json({
        //         message:"data saved successfully",
        //         error:null,
        //         data:data
        //     })
        // })
        const articleInstance=new ArticleModel({
            title:req.body.title,
            content:req.body.content,
            author:req.body.author||"clairon",
            image:req.body.image
        });
        let response = await articleInstance.save()
        
            res.status(200).json({
                message:"data saved successfully",
                error:null,
                data:response
            })
        
     }
     catch(error){
        console.log("there is an error from createarticlecontroller");
        res.send({message:"failed to save the data"})
     }
}
const readArticle=async(req,res)=>{
    try{
        const blogId=req.params.reqId;
        const query ={_id:blogId};
        const result =await ArticleModel.find(query);
         if(result.length==0){
            res.status(404).json({
                message:"data fetched but nothing was found",
                 error:"no data found",
                 data:result
            })
         }else{

        res.status(200).json({
            message:"data send successfullhy",
            error:null,
           data:result
        })
    }
    // res.send(name)
}
catch(err){
    console.log("error under readarticleone")
     res.status(500).json({
        message:"failed to read the article specified"
     })
}
}


// const myName=(req,res)=>{
//     const name=req.params.myName;
//     res.send(name);
// }

const readUser=(req,res)=>{           
    res.send("this is the read user")
}
const createUser=(req,res)=>{
    res.send("this is the create user")
}
const updateUser=(req,res)=>{
    res.send("this is the update user")
}
const deleteUser=(req,res)=>{
    res.send("this is the delete user")
}

const createArticlecontrols=(req,res)=>{
    try{
       res.send("there is controls")
    }
    catch(error){
       console.log("there is an error");
    }
}



const readArticlesLimited=async(req,res)=>{
  try{
    const page=req.query.page;
    const range=req.query.limit;
    let limitation = range*page;
    let start= limitation-range;

    let result = await ArticleModel.find({_id:articleId}).skip(start).limit(range)
    res.status(200).json({
        message:"read successfully",
        error:null,
        data:result
    })
  }  catch(error){
    console.log("error occured"),
    res.status(500).json({
        message:"error occured"
    })
}
}

const updateArticle= async(req,res)=>{
    const articleId=req.params.articleId;
    const updates=req.body;
    let found = await ArticleModel.find({_id:articleId});
    if (found.length==0){
        res.status(404).json({
            message:"article trying to update is not available",
            error:"article not found",
            data:null
        });
    }else{
        let result = await ArticleModel.findOneAndUpdate(
            {_id:articleId},
            {$set:updates}
        )
        res.status(200).json({
            message:"data updated successfully",
            error:null,
            data:result

        })
    }
}
export{createArticle,readArticle,readUser,createUser,updateUser,deleteUser,createArticlecontrols,updateArticle}