const Orders = [];
const OrderModel = {
   getAll() {
      return Order;
   },

   createOrder(order) {
      Orders.push(order)
   }
};

module.exports = OrderModel;