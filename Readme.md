# Informações úteis na criação da API
>Usarei esse readme para anotar oque eu for utilizando bem como pensamentos na criação dessa api para pesquisas futuras

## Dia 1

Primeiro eu precisei habilitar a execução de scriptis na maquina com o comando "Set-ExecutionPolicy Unrestricted".

Ao clonar o repositório do git, damos um yarn init -y para baixar as dependências do arquivo bem como sua biblioteca e yarn add express para adicionar as dependencias do express. Criei uma Pasta Src onde fica o arquivo server.ts

No Typescript usamos o Import e export

## Dia 2

Utilizei o comando yarn add @types/express -D para carregar a biblioteca do express

Para fazer com que a máquina consiga entender o código precisamos deixar em uma linguagem mais amigável que seria o javascript, para isso precisamos adicionar a dependência do typescrpit yarn add typescript -D, para inicializar precisamos dar o comando yarn tsc --init.

Com yarn tsc cria uma classe js, como o server.js, para não criar inúmeros documentos dentro da pasta src vamos na tsconfig e alteramos o outDist para mandar os arquivos para uma pasta específica.