const express= require("express");
const app = express();
const port = 8000;
const data = require("./data.json")


app.get("/student/studentsList",(req,res)=>{
    res.send(data);
    console.log(data);
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})