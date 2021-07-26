<style>
    .http {
        background-color: blue;
        padding: 4px;
        padding-left: 8px;
        padding-right: 8px;
        border-radius: 5px;
    }
</style>

# car-finder

## API REST para aplicativo de catálogo de carros
Desenvolvida em Node usando a base de dados MongoDB com ODM Mongoose.

A API REST recibe dados e procesa endpoints desde um navegador ou cliente API REST (por exemplo [Insomnia](https://insomnia.rest/) ou [Curl](https://curl.se/docs/manual.html)).

## Tabela de Conteúdos

- [Uso](#uso)
    * [Obter Coleção de itens de carros](#obter-coleção-de-itens-de-carros)
    * [Obter item de carro por `id`](#obter-item-de-carro-por-id)
    * [Cadastrar item de carro](#cadastrar-item-de-carro)
    * [Editar item de carro](#editar-item-de-carro)
    * [Apagar item carro por `id`](#apagar-item-carro-por-id)
- [Demonstraçâo](#demonstração)
- [Instalação local](#instalação-local)

## Uso

### Obter coleção de itens de carros

<pre>
    <code><span class='http'>GET</span> /cars</code>
</pre>

### Obter item de carro por `id`

<pre>
    <code><span class='http'>GET</span> /cars/:id</code>
</pre>

#### Parâmetros

| Nome | Tipo | Lugar | Descrição |
|:-:|:-:|:-:|-|
| `id` | String | path | Identification Number |

### Cadastrar item de carro

<pre>
    <code><span class='http'>POST</span> /cars</code>
</pre>

#### Parâmetros

| Nome | Tipo | Lugar | Descrição |
|:-:|:-:|:-:|-|
| `cadastradoPor` | String | body | Quem faz cadastro |
| `contato` | String | body | Quem faz cadastro |
| `uf` | String | body | Quem faz cadastro |
| `cidade` | String | body | Quem faz cadastro |
| `descricao` | String | body | Quem faz cadastro |
| `marca` | String | body | Quem faz cadastro |
| `modelo` | String | body | Quem faz cadastro |
| `cor` | String | body | Quem faz cadastro |
| `ano` | Number | body | Quem faz cadastro |
| `combustivel` | String | body | Quem faz cadastro |
| `transmissao` | String | body | Quem faz cadastro |
| `preco` | Number | body | Quem faz cadastro |
| `urlFotoPrincipal` | String | body | Quem faz cadastro |

### Editar item de carro

<pre>
    <code><span class='http'>PUT</span> /cars/:id</code>
</pre>

#### Parâmetros

| Nome | Tipo | Lugar | Descrição |
|:-:|:-:|:-:|-|
| `id` | String | path | Quem faz cadastro |
| `cadastradoPor` | String | body | Quem faz cadastro |
| `contato` | String | body | Quem faz cadastro |
| `uf` | String | body | Quem faz cadastro |
| `cidade` | String | body | Quem faz cadastro |
| `descricao` | String | body | Quem faz cadastro |
| `marca` | String | body | Quem faz cadastro |
| `modelo` | String | body | Quem faz cadastro |
| `cor` | String | body | Quem faz cadastro |
| `ano` | Number | body | Quem faz cadastro |
| `combustivel` | String | body | Quem faz cadastro |
| `transmissao` | String | body | Quem faz cadastro |
| `preco` | Number | body | Quem faz cadastro |
| `urlFotoPrincipal` | String | body | Quem faz cadastro |

### Apagar item carro por `id`

<pre>
    <code><span class='http'>DELETE</span> /cars/:id</code>
</pre>

#### Parâmetros

| Nome | Tipo | Lugar | Descrição |
|:-:|:-:|:-:|-|
| `id` | String | path | Identification Number |

## Demonstração
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