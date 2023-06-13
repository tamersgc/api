const {Router} = require("express");

const UserController = require("../controllers/userController")

const userRouters = Router();



function myMiddleware(request,response,next){

    console.log("Middleware ok")

    if(!request.body.isAdmin){
        return response.json({message:"Nao autorizado"});
    }



    next();

}




const userController = new UserController();


userRouters.post("/", myMiddleware, userController.create);


/* userRouters.post("/", (request, response)=>{ */
    
    /* const {name,email,password} = request.body; */

    /* response.send(`${name} ${email} ${password}`) */

    /* response.json({name,email,password}) */
    
/* }); */



module.exports = userRouters;