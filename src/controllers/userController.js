const AppError = require("../utils/AppError");

const sqliteConnection = require("../database/sqlite")

class userController{
    async create(request,response){

        const {name,email,password} = request.body;

 /*        if(!name){
            throw new AppError("Nome Obrigatorio")
        }
    
        response.status(201).json({name,email,password}) */

        const database = await sqliteConnection();

        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(checkUserExists){
            throw new AppError("Email ja esta em uso")
        }

        return response.status(201).json();

    }


}

module.exports = userController;