const { Router } = require("express")
const UserController = require("./Controller/UserController")

const routes = Router();


routes.get("/User", UserController.getAll)

routes.post("/User", UserController.create)

module.exports = routes