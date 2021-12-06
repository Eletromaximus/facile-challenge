# Desafio facille-challenge 

O desafio consiste de uma api que recebe uma string por meio de um POST, e o guarda criptografado no banco de dados.
Por meio de um id(um número inteiro, positivo e maior que 0), é possível recuperar o conteudo descriptografado.

Um segredo(uma chave de 16 bits - uma string de 16 caracteres) é guardado entre as variaveis de ambiente para os 
processos de encriptação e decriptação.

Para acessar de maneira facilitada o banco de dados, foi utilizado o **Prisma**. O **Node-Posgresql** funciona também.

Express foi utilizado para tratar das rotas, sendo elas a de encriptação ```/encript``` e 
decriptação ```/encript/:id```.

Typescript foi utilizado para evitar erros de tipagem e eslint mantem a boa formatação do código.


## 🚀 Começando

Esse projeto precisara:

- **Node.js** instalado. Esse projeto está com a versão **16.x**
- **VSCode** ou outro editor de código de sua preferência
- Uma conta gratuita no **Heroku**
- **Prisma** como gerenciador de banco de dados.
- Um **Insomnia** ou outra ferramenta necessária para testar a api
- Um navegador atualizado.
 

### 🔧 Instalação

Após a instalação do Node.js, replique este repositório para que você mesmo posso testar em sua máquina pessoal.
Use o comando ``` git clone ``` usando o endereço deste repositório.

Use o comando ```npm install``` para que as dependencias sejam instaldas.

Será necessário configurar uma variaveis de ambiente:
```SECRET``` que sera o segredo da criptografia.

As variaveis ```DATABASE_URL``` e ```PORT``` são de escrusividade da Heroku.

Certifique-se de inicializar o banco de dados com o comando ```npx prisma db pull``` antes de servir a aplicação.
O modelo de seu banco de dados e as configurações necessárias está contido no ```schema.prisma```

A variavel SECRET deverá ser configurada na pagina de configurações da Heroku.

Caso seja necessário, adicione um banco de dados postgresql como addon em sua conta gratuita 
e copie a credencial ```URI``` para ```DATABASE_URL```.


Use o **Insomnia** ou **Postman** para realizar requisições à sua api.
Para a rota de encriptação use **Endereço-fornecido-pela-Heroku/encript** pelo metodo **POST** e
**Endereço-fornecido-pela-Heroku/encript/:id** pelo metodo **GET** para recuperar o conteúdo.


## 📦 Desenvolvimento

É possível públicar hospedar no **Heroku** de tres maneiras: por meio de um repositorio github,
um cliente instaldo instalado no seu computador pessoal (Heroku-cli) ou por meio de containers.

Nesse projeto, o link deste repositório foi utilizado para o deploy. Mas a cli é igualmente fácil de utilizar.

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [Node.js](http://www.node.org) - O framework utlizado
* [Prisma](https://prisma.io/) - Para gerenciar o banco de dados
* [VSCode](https://code.visualstudio.com/) - Usada para gerenciar os códigos

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Max Milliano** - *Trabalho Inicial* - [Max Milliano](https://github.com/Eletromaximus)

## 📄 Licença

Este projeto está sob a licença MIT

## 🎁 Uma ultima palavrinha

* Obrigado por ler até fim 🤓.



---
⌨️ com ❤️ por Max Milliano