![](https://raw.githubusercontent.com/iranjunior/portfolio/master/src/assets/name.png)
[![Netlify Status](https://api.netlify.com/api/v1/badges/a0d30539-d122-4383-a920-d0515c3bbd5e/deploy-status)](https://app.netlify.com/sites/iranjunior/deploys)

# Site Pessoal 

**Tabela de Conteudos**

 - [Sobre o projeto](#sobre-o-projeto)
 - [Desempenho desse site](#desempenho-desse-site)
 - [Caracteristicas](#caracteristicas)
 - [Inicialização](#inicialização)
	- [Requisitos](#requisitos)
	- [Clonagem do Projeto](#clonagem-do-projeto)
	- [Comandos de inicialização](#comandos-de-inicialização)
- [Estrutura das pastas](#estrutura-das-pastas)
- [Rotas](#rotas)

## Sobre o projeto

Este é o repositório do projeto meu site pessoal, que pode ser acesso pelo link: iranjunior.netlify.com , nesse projeto eu faço uso de diversas tecnologias e abordagem que me garante um uma melhor performace, e melhoras quanto ao resultados nos mecanismos de busca.

## Desempenho desse site 

![](https://raw.githubusercontent.com/iranjunior/portfolio/master/src/assets/peformace.png)


## Caracteristicas
- [React](https://pt-br.reactjs.org/)
- [Lotties](https://airbnb.design/lottie/)
- Testes automatizado com [Jest](https://jestjs.io/)
- Organização e padronização de códigos com [ESLint](https://github.com/eslint/eslint)
- Criação e utilização de variaveis de ambiente com o [dotEnv](https://github.com/motdotla/dotenv)
- Offline First
- Responsividade



## Inicialização

### Requisitos
- [Node](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/lang/en/docs/install) ou [NPM](https://www.npmjs.com/get-npm)

### Clonagem do Projeto
Para clonar este desadio em seu reositorio local, você ira precisar do [Git](https://git-scm.com/ "Git"), uma vez instalado corretamente você pode executar o comando:
```bash
$ git clone https://github.com/iranjunior/portfolio.git
```
ou caso você tenha uma chave ssh configurada:
```bash
$ git clone git@github.com:iranjunior/portfolio.git
```
por fim execute o comando para entrar na pasta que foi criada e instalar as dependencias do projeto
```bash
$ cd portfolio
$ yarn
```

### Comandos de inicialização

Para iniciar a aplicação basta executar o comando: `yarn start` ou `npm run start`mas existe alguns comandos que podem lhe ajudar a realizar tarefas especificas como testes com a sua respectiva cobertura, cobertura dos testes e build da aplicação Uma lista completa sobre os comandos de inicialização pode ser vista abaixo:

Comandos  | Tarefa a ser realizada
------------- | -------------
`yarn start` | Inicializa o serviço em ambiente de desenvolvimento, com o modo live reload funcionando. O que facilita na atualização de componentes alterados em desenvolvimento
`yarn test` | Realiza todos os testes relacionados aos arquivos alterados
`yarn test:coverage`  | Realiza todos os testes e mostra os arquivos cobridos pelo teste
`yarn lint`  | Executa o ESLint nos arquivos da aplicação
`yarn build`  | Realiza o build da aplicação para execução em produção

## Estrutura das pastas
```
├─── public/
   └───...
├─── src/
   ├─── assets/
     └───...
   ├─── components/
     └───...
   ├─── pages/
      └───...
   ├─── services/
      └───...
   ├─── stories/
      └───...
      └───...
   ├─── styles/
      └───...
   └─── App.jsx
   └─── index.jsx
   └─── routes.jsx
   └─── serviceWorker.jsx
   └─── setupTests.jsx
...
```


## Rotas

A aplicação possui algumas rotas que trazem conteudos especificos, que vão desde a informações pessoais até meios de troca de mensagem comigo.

### Tabela de rotas

As rotas da aplicação estão listadas na tabela abaixo:

Rota  |  Descrição
--------------------  | --------------
`GET /`  | Está é a rota raiz da aplicação, nela é possivel encontrar informações minhas, sobre minha história e meus interesses.
`GET /skills`  | Essa é a rota que traz informações sobre minhas habilidades, sobre o que já conheço e sobre o que estou desenvolvendo.
`GET /formation`  | Essa é a rota que traz informações sobre minhas qualificações, meus cursos concluidos e em andamento.
`GET /portfolio`  | Essa rota mostra meus projetos, o que já fiz, onde estão hospedados, e links para acessa-los.
`GET /contact`  | Nesta rota é possivel deixar uma mensagem para mim. A mensagem deixada lá se tornará um email, que cairá na minha caixa de mensagem principal.
