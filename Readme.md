# Informações úteis na criação da API
>Usarei esse readme para anotar oque eu for utilizando bem como pensamentos na criação dessa api para pesquisas futuras

## Dia 1

### Primeiro dia
Primeiro eu precisei habilitar a execução de scriptis na maquina com o comando "Set-ExecutionPolicy Unrestricted".

Ao clonar o repositório do git, damos um yarn init -y para baixar as dependências do arquivo bem como sua biblioteca e yarn add express para adicionar as dependencias do express. Criei uma Pasta Src onde fica o arquivo server.ts


## Dia 2

Utilizei o comando yarn add @types/express -D para carregar a biblioteca do express

Para fazer com que a máquina consiga entender o código precisamos deixar em uma linguagem mais amigável que seria o javascript, para isso precisamos adicionar a dependência do typescrpit yarn add typescript -D, para inicializar precisamos dar o comando yarn tsc --init.

Com yarn tsc cria uma classe js, como o server.js, para não criar inúmeros documentos dentro da pasta src vamos na tsconfig e alteramos o outDist para mandar os arquivos para uma pasta específica.

## Dia 3

Para não precisar incluir os itens de uma request em ordem específica podemos criar uma interface

## Dia 4
[Ideia para criar meu projetos](https://xesque.rocketseat.dev/1571029149847-attachment.png)

Link de como instalar e configurar o [ESLint e Prettier](https://www.notion.so/ESLint-e-Prettier-Trilha-Node-js-d3f3ef576e7f45dfbbde5c25fa662779#eaf6e8bdcabc4d809cdae302e29750da)

Instalando a biblioteca yarn ts-node-dev -D não precisa ficar realizando a converção de ts para js, é só ir no package.json e criar um script.

Desabilitamos o strict do tsconfig.json para deixar a responsabilidade de verificar se tem erros para o typescript

Para cada recurso que criaremos, criaremos uma rota.
