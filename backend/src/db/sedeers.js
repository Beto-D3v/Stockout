const Database = require("./config");

//Estrutura para iniciar o banco de dados com os primeiro comando SQL
const sedeersDb = {
    async sedeers() {
        const db = await Database(); //O comando await diz para o javaScript esperar a execução de Database()

        //Não coloco o restante dentro de uma constante pois não preciso do resultado pra executar o proximo
        //diferente do  Database()
        await db.exec(`INSERT INTO product (nome, marca, valor) VALUES ('Arroz', 'Codil', 15.99),
                                                                       ('Oléo', 'ABC', 9.99), 
                                                                       ('Feijão', 'Codil', 7.99),
                                                                       ('Macarrão','EFG',2.99),
                                                                       ('Arroz','Veneza',12.99),
                                                                       ('Feijão','Carioca',8.99)`);

        await db.exec(`INSERT INTO Address (logradouro, bairro, uf, numero, cep) VALUES ('Rua Espirito Santo','Aclimação','SP',1023,06180180),
                                                                                        ('Rua Vinte e Dois','Liberdade','SP',100,06260190),
                                                                                        ('Rua Das Flores','Casa Verde','RJ',234,08014090),
                                                                                        ('Rua Mato Grosso','Limão','MT',350,04256990),
                                                                                        ('Rua Santa Rita','Aricanduva','GO',19,05632670)`);

        await db.close();
    },
};

sedeersDb.sedeers();
