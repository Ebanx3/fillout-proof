const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.status(200).json({message: "get"})
}
)
app.post("/",function (req,res) {
    console.log(req);
    res.status(200).json({message:"ok"})
})

app.listen(process.env.PORT || 8080, ()=> console.log("listening"));