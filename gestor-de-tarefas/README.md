
# 📝 Gestor de Tarefas (React)

Aplicação desenvolvida com React que permite criar, listar, editar, eliminar e marcar tarefas como concluídas. Inclui integração com uma API REST local (`json-server`). 

## 🚀 Funcionalidades

- 📋 Listagem de tarefas
- ➕ Criação de novas tarefas
- ✏️ Edição de tarefas existentes
- 🗑️ Eliminação de tarefas (com confirmação)
- ✅ Marcar tarefas como concluídas
- 🔄 API simulada com `json-server`


## ⚙️ Instalação e Arranque

### 1. Clonar o repositório


git clone https://github.com/o-teu-utilizador/gestor-tarefas-react.git
cd gestor-tarefas-react

### 2. Instalar dependencias

npm install

### 3. Iniciar o json-server (API local)

npx json-server --watch dataBase.json --port 3001

### 4. Iniciar o json-server (API local)

npm run dev

### Estrutura Inicial da dataBase.json

{
  "tasks": [
    {
      "id": 1,
      "title": "Estudar React",
      "description": "Revisar hooks principais",
      "priority": "alta",
      "done": false
    }
  ]
}

### Tecnologias Usadas

React
React Router DOM
Axios
json-server
Vite
CSS Modules