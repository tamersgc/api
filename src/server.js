require("express-async-errors")


const AppError = require("./utils/AppError")
const express = require('express');



const routes = require("./routes")

const app = express()

app.use(express.json())

app.use(routes)

/* app.get("/message/:id/:user", (request, response)=>{
    const {id,user} = request.params;
    response.send(`Id = ${id} USER = ${user} `)
    console.log("eitaaa")
});


app.get("/users", (request, response)=>{
    const {page,limit} = request.query;
    response.send(`Page = ${page}  Limit ${limit}`)
    console.log("eitaaa")
}); */

app.use((error, request, response,next) =>{

    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status:"error",
            message:error.message
        })
    }

    console.error(error);


    return response.status(500).json({
        status:"error",
        message:"Internal Server Error"
    })


});

app.listen(3333, ()=>{console.log("Server Running...")})