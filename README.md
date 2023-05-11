# 🏆 Projeto Full-Stack - **grupo3-t13**
Este projeto denominado "Kars E-Commerce" cria uma plataforma de e-commerce para compra e venda de carros. 

Todos os usuários, inclusive os não cadastrados, podem acessar a página com todos os anúncios, acessar anúncios de um determinado anunciante e podem também acessar a página de detalhamento de um determinado produto.
Para os demais acessos às páginas, o usuário precisará ser cadastrado e estar logado.

Os vendedores tem acesso a todas as páginas, além de poderem criar, editar e deletar seus próprios anúncios.

É possível exibir os anúncios utilizando vários tipos de filtro, conforme abaixo: 
 - Marca <br>
 - Modelo
 - Cor
 - Ano 
 - Combustível
 - Kilometragem mínima e máxima 
 - Preço mínimo e máximo<br>
 
 Inclusive é possível fazer combinações entre eles.<br>


_Esta aplicação foi toda desenvolvida em TypeScript_ 

### Para rodar o projeto, é necessário seguir as instruções abaixo.

## Requisitos mínimos

- Node.js v12 ou superior
- NPM v6 ou superior
- PostgreSQL v9.6 ou superior

Para inciar este projeto, primeiro é necessário clonar o repositório: <br>

```
git clone git@github.com:context-CODE/grupo3-t13-projeto-fullstack.git

```

Após isso, é necessário instalar as dependências, utilizando um dos comandos abaixo:

```
yarn install
```
ou
```
npm install
```

<br>

**Configure as variáveis de ambiente no seu .env**, passando as credenciais corretas para conectar em seu banco local.<br>
Observação: Certifique-se de que as portas usadas por esta aplicação não estejam sendo usadas por outras aplicações no seu sistema operacional.<br>

Appós isso, é necessário rodar as migrations, utilizando:

```
yarn typeorm migration:run -- -d src/data-source
```
ou
```
npm run typeorm migration:run -- -d src/data-source
```

Com isso feito, basta entrar nas pastas back e front e rodar a aplicação, utilizando os comandos abaixo:
```
cd back
yarn dev
```
ou 
```
cd back
npm run dev
```
e
```
cd front
yarn dev
```
ou 
```
cd front
npm run dev
```


<br>

## Endpoints :
A API tem um total de 18 endpoints, sendo divididos em 5 grupos: CRUD do usuário, CRUD dos anúncios, login, comentários e reset de senha.<br>

CRUD DO USUÁRIO:<br>
POST/users - Criação de usuário <br>
GET/users/:id/advertisements - Lista todos os anúncios de um determinado vendedor <br>
GET/users/profile - Lista o usuário que está logado no momento <br>
GET/users/:id - Lista um determinado usuário  <br>
PATCH/users/:id - Atualiza dados de um determinado usuário <br>
DELETE/users/:id - Realiza um soft delete no usuário <br>

CRUD DOS ANÚNCIOS:<br>
POST/advertisements - Criação de anúncio <br>
GET/advertisements - Lista todos os anúncios  <br>
GET/advertisements/:id - Lista um anúncio específico <br> 
PATCH/advertisements/:id - Atualiza dados de um anúncio <br>
DELETE/advertisements/:id - Realiza um soft delete no anúncio <br>

LOGIN:<br>
POST/login - Gera o token de autenticação <br>

COMENTÁRIOS:<br>
POST/comments - Criação de comentário <br>
GET/comments - Lista todos os comentários  <br>
GET/comments/:id - Lista um comentário específico  <br>
DELETE/comments/:id - Deleta um comentário <br>

RESET DE SENHA:<br>
POST/users/resetPassword - Envio de e-mail para redefinição de senha de um usuário <br>
POST/users/resetPassword/:reset_token - Redefine a senha de um usuário com base em um token de redefinição de senha fornecido <br>

  
## Exemplos de requisições dos POST e PATCH:

  ### POST/users - Criação de usuário 
  
```
{
	"name": "Marcelo dos Anjos",
	"email": "lebre1@gmail.com",
	"password": "teste",
	"cpf": "12341234198",
	"phone_number": "87 12345-6789",
	"birthdate": "01-01-1812",
	"profile_img": "https://pm1.narvii.com/6842/9c3218309289b57db66171ac15708e336833abd4v2_hq.jpg",
	"is_advertiser": true,
	"address": {
		"zip_code": "58900188",
		"state": "AP",
		"city": "Macapá",
		"street": "Avenida Azul",
		"number": 1234,
		"complement": "próximo à pizzaria"
	},
	"description": "Sou um vendedor paciente, sempre disposto a negociar até  encontrar uma solução que seja boa para o cliente e para mim."
 }
 ```
  
 ### PATCH/users/:id - Atualiza dados de um usuário (podem ser atualizados entre apenas 1 até 6 dados dentre os abaixo). 

  ```
 {
	"name": "Marcelo dos Santos",
	"email": "lebre_updated@gmail.com",
	"cpf": "12341234199",
	"phone_number": "87 12345-6788",
	"birthdate": "01-02-1812",
	"description": "Sou um vendedor paciente, sempre disposto a negociar até  encontrar uma solução que seja boa para o cliente e para mim. Já vendi mais de 10 carros nesta plataforma."
 }
 ```
  
 ### POST/advertisements - Criação de anúncio
 
  ```
 {
	"brand": "Porsche",
	"model": "918 Spyder.",
	"year": 2015,
	"fuel": "gasolina",
	"color": "prata",
	"kilometers": 25879,
	"price": 16500000,
	"description": "Carro maravilhoso, melhor que isso, só um teletransporte",
	"image": "https://img1.icarros.com/dbimg/imgadicionalnoticia/4/77523_1"
 }
 ```

 ### PATCH/advertisements/:id - Atualiza dados de um anúncio(podem ser atualizados entre apenas 1 atá todos os dados conforme abaixo)
 
  ```
 {
	"brand": "Porsche",
	"model": "918 Spyder.",
	"year": 2015,
	"fuel": "gasolina",
	"color": "prata",
	"kilometers": 25879,
	"price": 16500000,
	"description": "Carro maravilhoso, melhor que isso, só um teletransporte",
	"image": "https://img1.icarros.com/dbimg/imgadicionalnoticia/4/77523_1"
 }
 ```

 ### POST/comments - Criação de comentário
 
  ```
 {
   "description": "Ótimo carro, desempenho incrível.",
 }
 ```

 ### POST/users/resetPassword - Envio de e-mail para redefinição de senha de um usuário
 
  ```
 {
   "email": "lebre_updated@gmail.com"
 }
 ```

 ### POST/users/resetPassword/:reset_token - Redefine a senha de um usuário com base em um token de redefinição de senha fornecido 
 
  ```
 {
   "password": "12345"
 }
 ```


### Caso você seja um usuário de Insomnia, tem disponibilizado um **workspace** prontinho para facilitar na sua visualização. 

### Agora que já sabe como rodar o seu projeto, bom proveito utilizando esta aplicação para cadstrar e comprar excelentes automóveis!

