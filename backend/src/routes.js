const { Router } = require("express");
const AddressController = require("./Controller/AddressController");
const UserController = require("./Controller/UserController")

const routes = Router();


routes.get("/User", UserController.getAll)
routes.post("/User", UserController.create)

routes.get("/Address", AddressController.getAll)
routes.post("/Address", AddressController.create)

routes.get("/Product", ProductController.getAll)
routes.post("/Product", ProductController.create)

routes.get("/Order", ProductController.getAll)
routes.post("/Order", ProductController.create)



module.exports = routes