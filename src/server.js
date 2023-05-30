const express = require('express');

const app = express()

app.get("/message/:id/:user", (request, response)=>{
    const {id,user} = request.params;
    response.send(`Id = ${id} USER = ${user} `)
    console.log("eitaaa")
});


app.get("/users", (request, response)=>{
    const {page,limit} = request.query;
    response.send(`Page = ${page}  Limit ${limit}`)
    console.log("eitaaa")
});



app.listen(3333, ()=>{console.log("Server Running...")})