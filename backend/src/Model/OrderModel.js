const Database = require('../db/config')
const OrderModel = {
   getAll() {
      return Order;
   },

   async getById(orderId) {
      const db = await Database();
      const order = await db.all(`SELECT * FROM Orders WHERE id = ${orderId}`)
      const ordersItemsProduct = await db.all(`SELECT 
      Products.nome, 
      Products.marca, 
      Products.valor, 
      OrderItems.quantidade, 
      OrderItems.valor as valorTotal 
      FROM OrderItems 
      INNER JOIN Products on Products.id = OrderItems.productId WHERE orderId = ${orderId}`);


      const orderDescription = {
         order,
         "items" : ordersItemsProduct
      }
      return orderDescription;
   },

   async getLastOrder(created_at) {
      const db = await Database();
      const order = await db.all(`SELECT * FROM Orders WHERE created_at = '${created_at}' order by id desc limit 1`);
      return order;
   },

   async createOrder(order) {
      const db = await Database();
      const { userId, valor } = order;
      const created_at = new Date();
      const updated_at = new Date();
      await db.run(`INSERT INTO Orders (userId, valor, created_at, updated_at) VALUES ('${userId}', '${valor}', '${created_at}', '${updated_at}')`);
      const lastOrder = await this.getLastOrder(created_at);
      return lastOrder;
   }
};

module.exports = OrderModel;