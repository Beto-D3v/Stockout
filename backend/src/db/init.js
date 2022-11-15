const Database = require("./config");

//Estrutura para iniciar o banco de dados com os primeiro comando SQL
const initDb = {
   async init() {
      const db = await Database(); //O comando await diz para o javaScript esperar a execução de Database()

      //Não coloco o restante dentro de uma constante pois não preciso do resultado pra executar o proximo
      //diferente do  Database()
      await db.exec(`CREATE TABLE IF NOT EXISTS User (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name varchar, 
            cpf varchar, 
            email varchar,
            senha INT,
            dataNascimento INT,
        )`);



      await db.close();
   },
};

initDb.init();
