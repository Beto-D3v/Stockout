const OrderModel = require("../Model/OrderModel")

OrderModel
const OrderController = {
   create(request, response) {
      const { userId, valor, numeroDePedido } = request.body

      const order = {
         userId,
         valor
      }

      OrderModel.createOrder(order)

      response.status(201).send();
   },

   getAll(request, response){
      const order = OrderModel.getAll();
      response.json(order)
   }
}

module.exports = OrderController