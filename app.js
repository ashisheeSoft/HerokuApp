const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.status(200).send('Hello World');
    res.end();
});

app.get("/hello",(req,res)=>{
    res.status(200).send("Hello Ashish");
    res.end();
});
const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(
    `Server started on port ${PORT}`
));