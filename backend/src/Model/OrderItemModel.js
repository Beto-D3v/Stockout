const OrderItems = [];
const OrderItemModel = {
   getAll() {
      return OrderItem;
   },

   createOrderItem(orderItem) {
      OrderItems.push(orderItem)
   }
};

module.exports = OrderItemModel;