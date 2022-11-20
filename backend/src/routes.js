const { Router } = require("express");
const AddressController = require("./Controller/AddressController");
const ProductController = require("./Controller/ProductController");
const OrderController = require("./Controller/OrderController");
const UserController = require("./Controller/UserController");
const OrderItemController = require("./Controller/OrderItemController");
const LoginController = require('./Controller/LoginController')
const login = require("./middlewares/ensureLogged");

const routes = Router();

routes.get("/User", login.ensureLogged, UserController.getAll)
routes.get("/User/:id", login.ensureLogged, UserController.getById)
routes.post("/User", UserController.create)

routes.get("/Address", AddressController.getAll)
routes.post("/Address", AddressController.create)

routes.get("/Product", login.ensureLogged, ProductController.getAll)
routes.post("/Product", ProductController.create)

routes.get("/Order", login.ensureLogged, OrderController.getAll)
routes.get("/Order/:id", OrderController.getById)
routes.post("/Order", login.ensureLogged, OrderController.create)

routes.post ('/OrderItem', login.ensureLogged, OrderItemController.create)

routes.post ('/Login', LoginController.create)



module.exports = routes