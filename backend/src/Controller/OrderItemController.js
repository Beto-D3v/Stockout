const OrderItemModel = require("../Model/OrderItemModel")

OrderItemModel
const OrderItemController = {
   async create(request, response) {
      const { orderId, products } = request.body

     await OrderItemModel.create(orderId, products)
      response.status(201).send();
   },
}

module.exports = OrderItemController