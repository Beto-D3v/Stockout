const Database = require("./config");

//Estrutura para iniciar o banco de dados com os primeiro comando SQL
const initDb = {
   async init() {
      const db = await Database(); //O comando await diz para o javaScript esperar a execução de Database()

      //Não coloco o restante dentro de uma constante pois não preciso do resultado pra executar o proximo
      //diferente do  Database()
      await db.exec(`CREATE TABLE IF NOT EXISTS Users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome varchar, 
            cpf varchar, 
            email varchar,
            senha varchar,
            dataNascimento INT
        )`);

      await db.exec(`CREATE TABLE IF NOT EXISTS Products (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         nome varchar, 
         marca varchar, 
         valor decimal
        )`);

      await db.exec(`CREATE TABLE IF NOT EXISTS Addresses (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         logradouro varchar, 
         bairro varchar,
         uf varchar,
         numero int,
         cep varchar         
         )`);

      await db.exec(`CREATE TABLE IF NOT EXISTS OrderItems (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         orderId int,
         productId int,
         quantidade int,
         valor decimal
         )`);

      await db.exec(`CREATE TABLE IF NOT EXISTS Orders (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         userId int,
         orderNumber varchar,
         valor decimal,
         created_at date,
         updated_at date
         )`);

      await db.close();
   },
};

initDb.init();
