const UserModel = require("../Model/UserModel")

UserModel
const UserController = {
   create(request, response) {
      const { nome, cpf, email, senha, dataNascimento } = request.body

      if(!nome){
         response.status(500).json({
            "status": "failure",
            "message": "Preencha o nome!"
         })
      }

      const user = {
         nome, cpf, email, senha, dataNascimento
      }

      UserModel.createUser(user)

      response.status(201).send();
   },

   getAll(request, response){
      const users = UserModel.getAll();
      response.json(users)
   }
}

module.exports = UserController