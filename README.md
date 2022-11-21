# Stockout
Projeto Senac

# Sobre o projeto

Link do uso do projeto:

O projeto Stockout, é um aplicativo mobile, que foi desenvolvido pensando em como facilitar a compra de mantimentos, de maneira remota.
Além disso, nossa aplicação foi feita pensando em como ajudar com que os clientes comprem de comerciantes locais, fomentando o crescimento econômico daquela determinada região.

## Layout
<img src="https://github.com/Beto-D3v/Stockout/blob/main/frontend/assets/Tela%20inicial.jpg" width="200" height="450">   <img src="https://github.com/Beto-D3v/Stockout/blob/main/frontend/assets/Tela%20login.jpg" width="200" height="450">   <img src= "https://github.com/Beto-D3v/Stockout/blob/main/frontend/assets/Tela%20cadastro.jpg" width="200" height="450">

<img src= "https://github.com/Beto-D3v/Stockout/blob/main/frontend/assets/Tela%20menu.jpeg" width="200" height="450"> <img src= "https://github.com/Beto-D3v/Stockout/blob/main/frontend/assets/Tela%20Lojas.jpeg" width="200" height="450"> <img src= "https://github.com/Beto-D3v/Stockout/blob/main/frontend/assets/Tela%20mercado.jpeg" width="200" height="450">




## Padrão arquitetural

A aplicação Stock Out foi projetada através do padrão arquitetural MVC (Model View Controller). Por meio deste padrão de arquitetura, o projeto fica separado em layers (camadas lógicas), promovendo a separação do código em partes distintas, dependendo da separação de responsabilidade dos componentes.

Neste padrão, o Model do projeto, conterá a parte da lógica de negócio, a view irá apresentar nas telas, as informações para o usuário. E por fim, temos a intermediação das camadas que será executada pelo controller.

# Tecnologias utilizadas
## Back end
- Node
- Express.js
## Front end
- React Native
- Expo
- React Hookforms
- Axios
- Yup
## Banco de dados relacional
- Sql lite

# Executando o projeto

## Front end

- Pré requisitos: Node.js, Expo, Yup, React Native, React Hook Forms e axios.

- Instalando requisitos do projeto no prompt;

- Instando yarn: npm install -g yarn;

- Instalando expo: yarn add expo;

- Instalando axios: npm i axios;

- Instalando yup: yarn add @hookform/resolvers yup;

- Instalando react hook forms: expo add react-hook-form;

```
# clonar repositório

git clone https://github.com/Beto-D3v/Stockout.git

# Entrar na pasta do projeto

cd Stockout

cd Frontend

# instalar dependências

expo install

# Executar o projeto

expo start

```

# Testando a aplicação

## Tela de boas vindas

A primeira página, há duas opções de caminho para o usuário: clicar no botão de cadastro ou para a tela de Login. Caso ele não possua cadastro, ele poderá clicar em "Criar cadastro". Caso ele já possua seus dados cadastrados, ele poderá efetuar o login.

## Tela de cadastro

Nesta tela, o usuário deverá digitar seus dados e preencher todos os campos requeridos (nome, email, dataNascimento, cpf, Uf, cep, logradouro, numero, bairro , senha e confirmação de senha).

Obs. importantes: o cpf deve ter 11 caracteres;
a uf deve possuir 2 caracteres;
o cep deve possuir 8 caracteres;
A senha deve ter 6 caracteres, no mínimo;
Senha e confirmação de senha devem ser iguais.

Ao realizar o cadastro, as informações do usuário serão armazenadas em um banco de dados relacional.

## Tela de login

Ao ter os dados cadastrais, o usuário poderá realizar o login. Lembrando que ambos os campos dessa tela são requeridos e que a senha deve ter no mínimo 6 caracteres.

Caso as informações estejam de acordo, o usuário sera redirecionado para a tela de compras.

## Tela de compras


# Autores:

- Amanda Barreto Rocha 
- Lucas Pereira Costa
- Lúcio Dos Santos Júnior
- Priscila Cristina de Melo 
- Rafaela Eduarda Teixeira Silva
- Roberto Macedo

