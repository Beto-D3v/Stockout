const Database = require('../db/config');
const OrderItemModel = {
   async create(orderId, products) {
      const db = await Database();
      let sqlString = 'INSERT INTO OrderItems (orderId, productId, quantidade, valor) VALUES ';
      products.forEach(product => {
         const valorTotal = product.valor * product.quantidade;
         sqlString += `(${orderId}, '${product.id}', '${product.quantidade}', '${valorTotal}'),`
      })
      console.log(sqlString.slice(0, -1));
      await db.run(sqlString.slice(0, -1));
   }
};

module.exports = OrderItemModel;