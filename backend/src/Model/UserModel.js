const Database = require("../db/config")

const UserModel = {
   async getAll() {
      const db = await Database();
      const users = await db.all(`SELECT * FROM Users`)
      return users;
   },

   async getById(userId) {
      const db = await Database();
      const user = await db.get(`SELECT * FROM Users WHERE id = ${userId}`)
      return user;
   },

   async getByEmail(userEmail) {
      const db = await Database();
      const user = await db.get(`SELECT * FROM Users WHERE email = '${userEmail}'`);
      return user;
   },

   async createUser(user) {
      const db = await Database();
      await db.run(`
         INSERT INTO Users 
         (nome, cpf, email, senha, dataNascimento)
         VALUES ('${user.nome}', '${user.cpf}', '${user.email}', '${user.senha}', '${user.dataNascimento}')
      `);

      db.close()
   }
};

module.exports = UserModel;