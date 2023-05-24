const myName=(req,res)=>{
    const name=req.params.myName;
    res.send(name);
}
const deleteName=(req,res)=>{
    const dName=req.query.id;
    res.send(req.query);
}
const putName=(req,res)=>{
    const pName=req.params.id;
    const body=req.body
    res.send([pName,body])
}
export {myName,deleteName,putName} 