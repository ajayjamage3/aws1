const express = require("express")
const app = express()
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Welcome 1")
})

app.listen(443,async()=>{
    console.log("port is running at 443")
})
