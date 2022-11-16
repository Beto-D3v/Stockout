const AddressModel = require("../Model/AddressModel")

AddressModel
const AddressController = {
   create(request, response) {
      const { userId, uf, cep, logradouro, numero, bairro } = request.body

      if(!nome){
         response.status(500).json({
            "status": "failure",
            "message": "Preencha o nome!"
         })
      }

      const address = {
         userId, uf, cep, logradouro, numero, bairro
      }

      AddressModel.createAddress(address)

      response.status(201).send();
   },

   getAll(request, response){
      const address = AddressModel.getAll();
      response.json(address)
   }
}

module.exports = AddressController