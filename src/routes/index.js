const {Router} = require("express");

const userRouters = require("./users.routes");

const routers = Router();

routers.use("/users", userRouters);

module.exports = routers;