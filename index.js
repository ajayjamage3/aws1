const express = require("express")
const app = express()
app.use(express.json())


app.get("/home",(req,res)=>{
    res.send("Welcome 1")
})

app.listen(8080,()=>{
    console.log("port is running at 8080")
})
