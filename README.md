# 🛒 Inazuma Store

**Inazuma Store** é uma plataforma de e-commerce moderna, intuitiva e completa, desenvolvida para oferecer uma excelente experiência de compra online. O sistema contempla funcionalidades essenciais como gerenciamento de produtos, carrinho de compras, favoritos, rastreamento de pedidos, cupons de desconto e um painel administrativo robusto.

---

## 🌐 Acesse Online

🔗 [Inazuma Store - Versão Online](https://inazuma-store.netlify.app/)

* ✅ **Acesso livre:** Não é necessário login para explorar a loja.
* ⚠️ **Nota:** A versão online utiliza **dados estáticos** para pedidos, usuários e cupons, e não contempla integrações em tempo real com o backend.

---

## 🚀 Tecnologias Utilizadas

### **Frontend**

* ⚛️ React.js
* ⚖️ Redux Toolkit
* 🛍️ React Router DOM
* 🎨 Bootstrap
* 🗺️ Leaflet (mapas interativos para rastreio)

### **Backend**

* 🔴 Node.js + Express
* 📂 MySQL
* 🔐 JWT (autenticação via token)
* 📧 Nodemailer
* 🔒 bcryptjs

---

## 🎯 Funcionalidades

### 🛍️ Produtos

* Listagem e destaques
* Filtro por categoria
* Busca por nome ou palavra-chave

### ❤️ Favoritos

* Adição/remoção de produtos favoritos
* Persistência para usuários autenticados

### 🛒 Carrinho

* Adicionar/remover produtos
* Atualizar quantidades
* Cálculo com cupons

### 🧑‍💼 Perfil do Usuário

* Edição de dados
* Cadastro/gestão de endereços

### 📦 Pedidos e Rastreamento

* Visualização de pedidos
* Detalhamento completo
* Rastreamento em tempo real via mapa (Leaflet)

### 🎟️ Cupons

* Aplicação de cupons válidos
* Validação em tempo real

### 🔐 Autenticação

* Login e cadastro com JWT
* Criptografia segura de senhas
* Validação e expiração de token

---

## 🛠️ Painel Administrativo

Funcionalidades exclusivas para administradores:

* 📦 Gerenciamento de Pedidos
* 📊 Dashboard dinâmico com gráficos
* 📂 Listagem e filtros por status
* 🧑‍💼 Gestão de usuários
* 🚚 Modal de Rastreamento de Pedidos

  * Atualização de status
  * Localização em tempo real

---

## 🧑‍💻 Painel do Vendedor

Permite o gerenciamento independente de produtos pelos vendedores:

* 📦 Listagem de Produtos
* ➕ Cadastro de Produtos
* ✏️ Edição de Produtos
* ❌ Remoção de Produtos
* 📊 Detalhes com layout responsivo
* 🛒 Integração com Pedidos (em desenvolvimento)

---

## 🚀 Como Rodar o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/inazuma-store.git
cd inazuma-store
```

### 2. Instalar Dependências do Frontend

```bash
npm install
```

### 3. Rodar o Frontend

```bash
npm start
```

### 4. Configurar o Backend

No diretório `back-end`, crie um arquivo `.env` com as variáveis:

```env
DB_HOST=
DB_NAME=inazuma_store
DB_USER=
DB_PASS=
JWT_SECRET=

USER_EMAIL=
PASSWORD_EMAIL=
HOST_EMAIL=
PORT_EMAIL=
```

### 5. Rodar o Backend

```bash
cd back-end
node server.js
```

---

## 📄 Licença

Este projeto é open-source e está sob a licença [MIT](LICENSE).
