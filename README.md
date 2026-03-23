# consumir-api

Frontend React que consome a [js-api](https://github.com/JoaoVitorPrazeres/js-api) — uma API REST de cadastro e gerenciamento de alunos. Permite visualizar, cadastrar, editar e remover alunos, além de fazer upload de fotos e autenticação via JWT.

---

## 🔗 Backend

Este projeto depende da [js-api](https://github.com/JoaoVitorPrazeres/js-api) rodando localmente ou em servidor. Configure e suba o backend antes de executar o frontend.

---

## 🚀 Tecnologias

| Tecnologia | Versão | Finalidade |
|---|---|---|
| React | 19 | Biblioteca de UI |
| Vite | 7 | Bundler e dev server |
| React Router DOM | 5 | Roteamento |
| Axios | 1.x | Requisições HTTP à js-api |
| Redux | 5 | Gerenciamento de estado global |
| Redux Saga | 1.x | Side effects assíncronos (login, CRUD) |
| Redux Persist | 6 | Persistência de sessão (token JWT) |
| Styled Components | 6 | Estilização CSS-in-JS |
| React Toastify | 11 | Notificações de feedback |
| React Icons | 5 | Ícones |
| Prop Types | 15 | Tipagem de props |
| Validator | 13 | Validação de formulários |

---

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn
- [js-api](https://github.com/JoaoVitorPrazeres/js-api) rodando (backend)

---

## ⚙️ Instalação

```bash
# Clone o repositório
git clone https://github.com/JoaoVitorPrazeres/consumir-api.git

# Entre na pasta
cd consumir-api

# Instale as dependências
npm install
```

---

## ▶️ Executando

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

---

## 🔌 Configuração da API

A URL base da `js-api` deve ser definida no arquivo de serviços do Axios:

```js
// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export default api;
```

> A porta padrão da `js-api` é `3001`. Ajuste conforme sua configuração.

---

## 🔐 Autenticação

O login gera um token JWT retornado pela `js-api`. Esse token é armazenado via **Redux Persist** e enviado automaticamente nas requisições autenticadas pelo Axios.

---

## 📌 Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| Login | Autenticação via `POST /tokens` |
| Listar alunos | Consulta via `GET /alunos` |
| Cadastrar aluno | Formulário integrado com `POST /alunos` |
| Editar aluno | Atualização via `PUT /alunos/:id` |
| Remover aluno | Exclusão via `DELETE /alunos/:id` |
| Upload de foto | Envio de imagem via `POST /fotos/:id` |

---

## 📁 Estrutura do projeto

```
consumir-api/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/          # Páginas da aplicação
│   ├── store/          # Redux (reducers, sagas)
│   ├── services/       # Instância do Axios
│   ├── routes/         # Rotas (React Router v5)
│   └── App.jsx         # Componente raiz
├── index.html
├── vite.config.js
└── package.json
```

---

## 🛠️ Scripts disponíveis

| Script | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run preview` | Visualiza o build localmente |
| `npm run lint` | Executa o ESLint |

---

## 👤 Autor

**João Vitor Prazeres da Silva**
[GitHub](https://github.com/JoaoVitorPrazeres)
