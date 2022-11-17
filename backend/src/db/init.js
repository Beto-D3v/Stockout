const Database = require("./config");

//Estrutura para iniciar o banco de dados com os primeiro comando SQL
const initDb = {
   async init() {
      const db = await Database(); //O comando await diz para o javaScript esperar a execução de Database()

      //Não coloco o restante dentro de uma constante pois não preciso do resultado pra executar o proximo
      //diferente do  Database()
      await db.exec(`CREATE TABLE IF NOT EXISTS User (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome varchar, 
            cpf varchar, 
            email varchar,
            senha INT,
            dataNascimento INT
        )`);

      await db.exec(`CREATE TABLE IF NOT EXISTS Product (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         nome varchar, 
         marca varchar, 
         valor INT

        )`);

      await db.exec(`CREATE TABLE IF NOT EXISTS Address (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         logradouro varchar, 
         bairro varchar,
         uf varchar,
         numero INT,
         cep INT
         
         )`);
      await db.close();
   },
};

initDb.init();
