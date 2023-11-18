const express = require("express");

const app = express();


app.use("/" , (req,res) => {
    res.status(200).json({
        message : "server is running"
    })
})


app.listen(3000, ()=> {

    console.log("server is running 3000 port")

})