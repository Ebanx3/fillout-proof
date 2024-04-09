import express from "express";

const app = express();

app.post("/", (req,res)=> {
    console.log(req);
    res.status(200).json({message:"ok"})
})

app.listen(process.env.PORT || 8080, ()=> console.log("listening"));