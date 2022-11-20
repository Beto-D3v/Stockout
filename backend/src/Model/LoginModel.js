const Database = require('../db/config')
const { sign } = require('jsonwebtoken')

const LoginModel = {
   async Login(email, senha) {
      const db = await Database();
      const user = await db.get(`SELECT * FROM Users WHERE email = '${email}' AND senha = '${senha}'`)

      if (!user) {
         throw new Error('Email/Password incorrect')
      }

      const token = sign(
         {
            email: user.email //Payload
         },
         "1d1e55d3e1784ad4d8f00fe437a11dd4",// Secret Key
         {
            subject: user.id.toString(),
            expiresIn: "1d"
         });
      return token;
   }
};

module.exports = LoginModel;