const express = require("express");
const app = express();
const port = 8000;
const fs = require("fs");

app.use(express.json());

app.post("/student/add",(req,res)=>{
    var studentFirstName =req.body.studentFirstName;
    var collegeName = req.body.collegeName;
    var location = req.body.location;
var data = {
    "studentFirstName":studentFirstName,
    "collegeName":collegeName,
    "location":location
}

    fs.writeFileSync("data.json",JSON.stringify(data))
    res.send({ "result": "Success" })
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})