const Database = require("../db/config")

const UserModel = {
   async getAll() {
      const db = await Database();
      const users = await db.all(`SELECT * FROM User`)
      return users;
   },

   async getById(userId) {
      const db = await Database();
      const user = await db.get(`SELECT * FROM User WHERE id = ${userId}`)
      return user;
   },

   async getByEmail(userEmail) {
      const db = await Database();
      const user = await db.get(`SELECT * FROM User WHERE email = '${userEmail}'`);
      return user;
   },

   async createUser(user) {
      const db = await Database();
      await db.run(`
         INSERT INTO User 
         (nome, cpf, email, senha, dataNascimento)
         VALUES ('${user.nome}', '${user.cpf}', '${user.email}', '${user.name}', '${user.dataNascimento}')
      `);

      db.close()
   }
};

module.exports = UserModel;