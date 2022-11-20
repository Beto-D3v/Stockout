const OrderModel = require("../Model/OrderModel")

OrderModel
const OrderController = {
   async create(request, response) {
      const { userId, valor } = request.body

      const order = {
         userId,
         valor
      }

     const lastOrder = await OrderModel.createOrder(order)

      response.status(201).json(lastOrder);
   },

   async getAll(request, response){
      const order = OrderModel.getAll();
      response.json(order)
   },

   async getById(request, response){
      const orderId = request.params.id
      const order = await OrderModel.getById(orderId);
      response.json(order)
   }
}

module.exports = OrderController