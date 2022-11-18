const { Router } = require("express");
const AddressController = require("./Controller/AddressController");
const ProductController = require("./Controller/ProductController");
const OrderController = require("./Controller/OrderController");
const UserController = require("./Controller/UserController")

const routes = Router();

routes.get("/User", UserController.getAll)
routes.get("/User/:id", UserController.getById)
routes.post("/User", UserController.create)

routes.get("/Address", AddressController.getAll)
routes.post("/Address", AddressController.create)

routes.get("/Product", ProductController.getAll)
routes.post("/Product", ProductController.create)

routes.get("/Order", OrderController.getAll)
routes.post("/Order", OrderController.create)



module.exports = routes