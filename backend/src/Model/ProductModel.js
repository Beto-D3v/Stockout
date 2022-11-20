const Database = require('../db/config')
const ProductModel = {
   async getAll() {
      const db = await Database();
      const products = await db.all(`SELECT * FROM Products`);
      return products;
   },

   createProduct(product) {
      Products.push(product)
   }
};

module.exports = ProductModel;