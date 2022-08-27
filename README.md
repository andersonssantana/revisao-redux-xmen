# Boas-vindas ao repositório do projeto X-Men Redux Vault!

Para realizar o projeto, atente-se a cada passo descrito a seguir.

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica para colocar seus códigos. Para fins didáticos, a resolução completa está na branch `gabarito`.

# Entregáveis

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Neste projeto você vai revisar a configuração do Redux a partir de uma aplicação que loga uma pessoa usuária e exibe uma lista de personagens. Ao utilizar essa aplicação um usuário deverá ser capaz de:

  - Fazer login na aplicação;
  - Visualizar uma lista de personagens;
  - Realizar uma busca pelo nome ou alias dos personagens;
</details>

<details>
  <summary><strong>📝 Habilidades</strong></summary><br />

Neste projeto, verificamos se você é capaz de:

- Criar um _store_ Redux em aplicações React

- Criar _reducers_ no Redux em aplicações React

- Criar _actions_ no Redux em aplicações React

- Criar _dispatchers_ no Redux em aplicações React

- Conectar Redux aos componentes React

- Criar _actions_ assíncronas na sua aplicação React que faz uso de Redux.
</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:andersonssantana/revisao-redux-xmen.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd revisao-redux-xmen`

  2. Instale as dependências

  - `npm install`.
  
  3. Crie uma branch a partir da branch `main`

  - Verifique que você está na branch `main`
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `main`
    - Exemplo: `git checkout main`
  - Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    - Exemplo: `git checkout -b joaozinho-revisao-redux-xmen`

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

  - Faça `commits` das alterações que você fizer no código regularmente

  - Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

  - Os comandos que você utilizará com mais frequência são:
    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
    2. `git add` _(para adicionar arquivos ao stage do Git)_
    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
    4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary><strong id="como-desenvolver">🛠 Desenvolvimento </strong></summary><br />

  Neste projeto você vai configurar o Redux React em uma aplicação já existente. Na implementação você deverá utilizar o seguinte formato do estado global:

```js
{
  loginReducer: {
    username: ''
  },
  charactersReducer: {
    characters: [],
    loading: true,
    error: undefined,
  }
}
```

  <br />
  <details><summary><b> :bulb: Configurando o Redux DevTools</b></summary>

  Para usarmos o Redux DevTools com o Redux-Thunk, vamos utilizar uma biblioteca chamada `redux-devtools-extension` que possui a função `composeWithDevTools`. Ela já está no package.json, a única coisa que você vai precisar fazer é configurar a sua store, por exemplo:

  ```javascript
  import { legacy_createStore as createStore, applyMiddleware } from 'redux';
  import { composeWithDevTools } from '@redux-devtools/extension';
  import thunk from 'redux-thunk';
  import rootReducer from './reducers';

  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk),
    ),
  );

  export default store;
  ```
  </details>

  <details><summary><b> :bulb: Consumo da API</b></summary>

  Sua página _web_ irá consumir os dados da API gratuita _X-Men API Heroku_ para realizar a busca dos personagens. Já existe um arquivo em `src/redux/services/api.js` que traz os resultados necessários. Para realizar essas buscas, o seguinte _endpoint_ é utilizado:

  - <https://xmenapiheroku.herokuapp.com/api/characters>

  O retorno desse endpoint será algo no formato:

```json
{
  "results": [
    {
      "id": 1,
      "name": "Scott Summers",
      "alias": "Cyclops",
      "description": "He is one of the founding members of the X-Men.",
      "powers": [
        "Eye Energy Beams"
      ],
      "img": "https://cdn.glitch.com/6137de19-12c5-43e0-9704-2252d809dcfb%2FCyclops.png",
      "affiliation": "X-Men",
      "created": "2020-12-26T19:48:26.027Z"
    },
    ...
  ],
  "info": {
    "count": 23,
    "limit": 20,
    "pageCount": 2,
    "page": 1,
    "prev": null,
    "next": "https://xmenapiheroku.herokuapp.com/api/characters?page=2"
  }
}
```

  </details><br />

</details>

# Requisitos

---

## 1. Criação da estrutura de pastas

Crie uma estrutura de pastas para configurar o Redux. A estrutura pode ser semelhante ao seguinte exemplo:

<details><summary> Estrutura de pastas</summary>

```
revisao-redux-xmen  
│
└───src
    │
    └───redux
        │
        └───actions
        │   │   charactersActions.js
        │   │   loginActions.js
        │
        └───reducers
        │   │   index.js
        │   │   loginReducer.js
        │   │   charactersReducer.js
        │
        └───store
            │   index.js
```
</details><br />

---

## 2. Crie a store

* A sua store deve ser criada no arquivo `src/redux/store/index.js`;

* <details><summary> Você deve criar uma store da seguinte forma:</summary>

  - A extensão `composeWithDevTools` pode ser importada de `redux-devtools-extension`;
  - A função `createStore` ou `legacy_createStore` pode ser importada de `redux`;
  - O `applyMiddleware` pode ser importado de `redux`, junto com a função `createStore`;
  - O `thunk` pode ser importado de `redux-thunk`;
  - O rootReducer ainda não existe, mas você já pode deixar importado da pasta `../reducers`;
  - A `store` deve ser exportada como `default`.
</details>

---

## 3. Crie o reducer para o login

* O seu reducer para login deve ser criado no arquivo `src/redux/reducers/loginReducer.js`;

* <details><summary> Você deve criar o reducer da seguinte forma:</summary>

  - O estado inicial do reducer deve ser no seguinte formato:

  ```json
  {
    username: '',
  }
  ```

  - O reducer deve ser capaz de salvar o `username` no estado global através de uma action;
  - O `loginReducer` deve ser exportado como `default`.

</details>

---

## 4. Crie o reducer para os personagens

* O seu reducer para personagens deve ser criado no arquivo `src/redux/reducers/charactersReducer.js`;

* <details><summary> Você deve criar o reducer da seguinte forma:</summary>

  - O estado inicial do reducer deve ser no seguinte formato:

  ```json
  {
    characters: [],
    loading: true,
    error: undefined,
  }
  ```

  - Caso requisitado, o reducer deve ser capaz de alterar o `loading` para `true` no estado global através de uma action;
  - Caso requisitado, o reducer deve ser capaz de salvar os personagens requisitados em `characters` no estado global através de uma action e retornar o `loading` para `false`;
  - Caso a requisição falhe, o reducer deve ser capaz de salvar uma mensagem de erro em `error` no estado global através de uma action;
  - O `charactersReducer` deve ser exportado como `default`.

</details>

---

## 5. Combine os dois reducers

* O seu combineReducers deve ser criado no arquivo `src/redux/reducers/index.js`;

* <details><summary> Você deve criar o combineReducers da seguinte forma:</summary>

  - A função `combineReducers` pode ser importada de `redux`;
  - O `combineReducers` deve combinar os reducers `loginReducer` e `charactersReducer`;
  - O reducer combinado deve ser exportado como `default`.

---

## 6. Crie sua action para a tela de login

* A sua action para login deve ser criada no arquivo `src/redux/actions/loginActions.js`;

* 💡 *Dica:* você pode colocar o type da sua action em uma constante e exportá-la;

* <details><summary> Você deve criar a action da seguinte forma:</summary>

  - A action deve receber um payload;
  - A action deve possuir o type `'LOG_IN'`;
  - A action deve encaminhar o payload;
  - A action deve ser exportada como `default`.

---

## 7. Prepare o seu LoginForm para escrever no estado global

* O seu componente `LoginForm` deve ser capaz de *salvar* as informações de usuário no estado global;

* <details><summary> Você deve conectar o componente ao estado global da seguinte forma:</summary>

  - Você deve importar o `connect` de `react-redux`;
  - O componente fará uma operação de *escrita* no estado. Para isso, você pode usar o `mapDispatchToProps`;
  - 💡 *Dica:* O `mapDispatchToProps` é o segundo parâmetro do `connect`;
  - 💡 *Dica:* O `mapDispatchToProps` é uma função que recebe `dispatch` e retorna um objeto que será mapeado para `props`;
  - Já existe uma função `handleClick` no componente. Você deve utilizá-la para dar um dispatch na action desejada;
  - A action deve ser exportada como `default`.

---

## 8. Prepare o seu UserInfo para ler o estado global

* O seu componente `UserInfo` deve ser capaz de *ler* as informações de usuário do estado global;

* <details><summary> Você deve conectar o componente ao estado global da seguinte forma:</summary>

  - Você deve importar o `connect` de `react-redux`;
  - O componente fará uma operação de *leitura* no estado. Para isso, você deve usar o `mapStateToProps`;
  - 💡 *Dica:* O `mapStateToProps` é o primeiro parâmetro do `connect`;
  - 💡 *Dica:* O `mapStateToProps` é uma função que recebe o estado global e retorna um objeto que será mapeado para `props`;
  - O componente deverá receber como `props` a chave `username` do reducer de login.

---

## 9. Crie suas actions para a tela dos personagens

* As suas actions para personagens devem ser criadas no arquivo `src/redux/actions/charactersActions.js`;

* 💡 *Dica:* você pode colocar o type das suas actions em constantes e exportá-las;

* <details><summary> Você deve criar a action de requisição da seguinte forma:</summary>

  - A action não precisa de um payload;
  - A action deve possuir o type `'REQUEST_CHARACTERS'`;
  - 💡 *Dica:* Esta action apenas vai setar o loading do estado global para `true`.

* <details><summary> Você deve criar a action de salvar os personagens da seguinte forma:</summary>

  - A action deve receber um payload;
  - A action deve possuir o type `'SAVE_CHARACTERS'`;
  - A action deve encaminhar o payload;
  - 💡 *Dica:* Esta action vai receber os dados do fetch e salva-los no estado global.

* <details><summary> Você deve criar a action de erro da seguinte forma:</summary>

  - A action deve receber um payload;
  - A action deve possuir o type `'FAILED_REQUEST'`;
  - A action deve encaminhar o payload;
  - 💡 *Dica:* Esta action vai receber uma mensagem de erro, caso exista e seja disparada pelo thunk, e salvá-la no estado global.

* <details><summary> Você deve criar a action thunk da seguinte forma:</summary>

  - A action deve ser um _thunk_;
  - 💡 *Dica:* Um _thunk_ é uma action que recebe `dispatch` e retorna uma função assíncrona;
  - O _thunk_ deve disparar a action `'REQUEST_CHARACTERS'`;
  - O _thunk_ deve tentar fazer uma requisição assíncrona. A função `fetchCharacters()` deve ser chamada nesta requisição;
  - Após a requisição, o _thunk_ deve disparar a action `'SAVE_CHARACTERS'`, encaminhando nela o payload com os dados obtidos;
  - Caso a tentativa da requisição falhe, o _thunk_ deve capturar o erro e disparar a action `'FAILED_REQUEST'`, encaminhando nela o payload com o erro obtido;
  - O _thunk_ deve ser exportado como `default`.

---

## 10. Prepare o seu XMenPage para escrever no estado global

* O seu componente `XMenPage` deve ser capaz de *salvar* as informações de usuário no estado global;

* <details><summary> Você deve conectar o componente ao estado global da seguinte forma:</summary>

  - Você deve importar o `connect` de `react-redux`;
  - O componente fará uma operação de *escrita* no estado. Para isso, você pode usar o `mapDispatchToProps`;
  - 💡 *Dica:* O `mapDispatchToProps` é o segundo parâmetro do `connect`;
  - 💡 *Dica:* O `mapDispatchToProps` é uma função que recebe `dispatch` e retorna um objeto que será mapeado para `props`;
  - Ao carregar a página, o componente vai disparar o _thunk_ que fará a requisição para a API.

---

## 11. Prepare o seu PageContent para ler o estado global

* O seu componente `PageContent` deve ser capaz de *ler* as informações de usuário do estado global;

* <details><summary> Você deve conectar o componente ao estado global da seguinte forma:</summary>

  - Você deve importar o `connect` de `react-redux`;
  - O componente fará uma operação de *leitura* no estado. Para isso, você deve usar o `mapStateToProps`;
  - 💡 *Dica:* O `mapStateToProps` é o primeiro parâmetro do `connect`;
  - 💡 *Dica:* O `mapStateToProps` é uma função que recebe o estado global e retorna um objeto que será mapeado para `props`;
  - O componente deverá receber como `props` as três chaves do reducer de personagens: `characters`, `loading` e `error`;
  - O componente deverá renderizar os cards de personagens de acordo com o que receber em `characters`.

---


# Requisitos bônus (opcionais)

---

## 12. Crie uma validação para o nome de usuário na tela de login

## 13. Crie um campo de password com validação na tela de login

## 14. Crie testes para a aplicação
