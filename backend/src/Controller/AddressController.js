const AddressModel = require("../Model/AddressModel")

AddressModel
const AddressController = {
   async create(request, response) {
      const { userId, uf, cep, logradouro, numero, bairro } = request.body

      if (!nome) {
         response.status(500).json({
            "status": "failure",
            "message": "Preencha o nome!"
         })
      }

      const address = {
         userId, uf, cep, logradouro, numero, bairro
      }

      await AddressModel.createAddress(address)

      response.status(201).send();
   },

   async getAll(request, response) {
      const address = await AddressModel.getAll();
      response.json(address)
   }
}

module.exports = AddressController