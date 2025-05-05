const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.status(200).json("hellow world")
})

app.listen(3300, (error) => {
    if (!error) {
        console.log("server is running on the port 3300");
    } 
})
