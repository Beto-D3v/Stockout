const Products = [];
const ProductModel = {
   getAll() {
      return Products;
   },

   createProduct(product) {
      Products.push(product)
   }
};

module.exports = ProductModel;