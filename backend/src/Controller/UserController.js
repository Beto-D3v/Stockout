const UserModel = require("../Model/UserModel")

const UserController = {
   async create(request, response) {
      const { nome, cpf, email, senha, dataNascimento } = request.body
      try {
         if (!nome) {
            throw new Error("Preencha o nome")
         }

         const ExistUser = await UserModel.getByEmail(email);

         if(ExistUser){
            throw new Error("Já existe um usuário cadastrado com esse email!")
         }

         const user = {
            nome, cpf, email, senha, dataNascimento
         }

         await UserModel.createUser(user)

         response.status(201).json({
            "status": "sucesso",
            "message": "Usuário criado com sucesso!"
         });
      } catch (error) {
         response.json({
            "status": "failure",
            "message": `${error}`
         })
      }
   },

   async getAll(request, response) {
      try {
          const users = await UserModel.getAll();
         console.log(users)
         response.json(users)
      } catch (error) {
         response.status(500).json({
            "status": "failure",
            "message": error
         })
      }
   },

   async getById(request, response) {
      try {
         const userId = request.params.id
         const user = await UserModel.getById(userId);
         response.json(user)
      } catch (error) {
         response.status(500).json({
            "status": "failure",
            "message": error
         })
      }
   }
}

module.exports = UserController