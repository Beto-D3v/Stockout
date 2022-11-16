const OrderItemModel = require("../Model/OrderItemModel")

OrderItemModel
const OrderItemController = {
   create(request, response) {
      const { ListaProdutos, NumeroPedido } = request.body

      const orderItem = {
         ListaProdutos, NumeroPedido
      }

      OrderItemModel.createOrderItem(orderItem)

      response.status(201).send();
   },

   getAll(request, response){
      const orderItem = OrderItemModel.getAll();
      response.json(orderItem)
   }
}

module.exports = OrderItemController