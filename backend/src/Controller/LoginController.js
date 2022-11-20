const LoginModel = require("../Model/LoginModel")

LoginModel
const LoginController = {
   async create(request, response) {
      try {
         
         const { email, senha } = request.body
   
         const token = await LoginModel.Login(email, senha)
         return response.json(token);

      } catch (error) {
         return response.json(error.message);
      }

   }
}

module.exports = LoginController