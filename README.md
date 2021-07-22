# car-finder

## API REST para aplicativo de catálogo de carros
Desenvolvida em Node usando a base de dados MongoDB com ODM Mongoose.

A API REST recibe dados e procesa endpoints desde um navegador ou cliente API REST (por exemplo [Insomnia](https://insomnia.rest/) ou [Curl](https://curl.se/docs/manual.html)).

## Uso

| Método HTTP | Caminho     |
|:-----------:|-------------|
|GET          |`/cars`     |

## Demonstrações
Foi rodado na plataformas Heroku. Fica a vontade para testar:

* [Heroku App](https://carfinder-toti.herokuapp.com/)

## Instalação local

### 1. Clonar este repositório

```sh
git clone https://github.com/alfredojry/car-finder.git
```

### 2. Ir ao diretório

```sh
cd car-finder
```

### 3. Instalar as dependencias npm

```sh
npm install
```

### 5. Criar o arquivo de configuração `.env` com a URI da base de dados MongoDB

* Se a base de dado é local, mudar `<dbname>` por sua base de dados.

```sh
MONGO_URI=mongodb://localhost:27017/<dbname>
```

* Se a base de dado é MongoDB Atlas, cole a URI de conexão para Node.js.

```sh
MONGO_URI=mongodb+srv://<usuario>:<password>@<clustername>.mongodb.net/<dbname>?retryWrites=true&w=majority
```

### 6. Rodar o servidor

```sh
npm start
```

### 7. Esperar a conexão
Se a base de dado é Mongo Atlas, a conexão vai demorar. Na console de node imprimirá `Mongoose está conectado!!!` .