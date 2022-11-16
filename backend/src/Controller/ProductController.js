const ProductModel = require("../Model/ProductModel")

ProductModel
const ProductController = {
   create(request, response) {
      const { nome, descricao, preco } = request.body

      const product = {
         nome, descricao, preco
      }

      ProductModel.createProduct(product)

      response.status(201).send();
   },

   getAll(request, response){
      const product = ProductModel.getAll();
      response.json(product)
   }
}

module.exports = ProductController