const ProductModel = require("../Model/ProductModel")

ProductModel
const ProductController = {
   async create(request, response) {
      const { nome, descricao, preco } = request.body

      const product = {
         nome, descricao, preco
      }

      await ProductModel.createProduct(product)

      response.status(201).send();
   },

   async getAll(request, response){
      const product = await ProductModel.getAll();
      response.json(product)
   }
}

module.exports = ProductController