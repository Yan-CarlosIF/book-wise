# 📚 Book Wise

**Book Wise** é uma aplicação **Full Stack** desenvolvida para permitir a avaliação, categorização e análise de livros lidos. Focada em autenticação segura, interface moderna e experiência otimizada de filtragem e navegação.

![Chama](./public/app-image.png)

---

## 🚀 Tecnologias Utilizadas

- **Next.js** – Framework React com suporte a SSR/SSG.
- **TypeScript** – Tipagem estática para maior robustez no desenvolvimento.
- **Prisma ORM** – ORM moderno com integração ao banco de dados SQLite.
- **SQLite** – Banco de dados leve, ideal para aplicações locais ou em estágio inicial.
- **NextAuth.js** – Sistema de autenticação com OAuth (integração com GitHub).
- **TailwindCSS** – Framework CSS utilitário para estilização rápida e responsiva.
- **shadcn/ui** – Biblioteca de componentes acessíveis e estilizados com TailwindCSS.
- **pnpm** – Gerenciador de pacotes rápido e eficiente.
- **ESLint & Prettier** – Ferramentas para padronização e qualidade de código.

---

## ⚙️ Funcionalidades

- ✅ Autenticação via GitHub OAuth.
- ✅ Avaliação de livros com comentários.
- ✅ Filtragem de livros por categoria.
- ✅ Persistência dos filtros via URL (`searchParams`).
- ✅ Sistema de busca com performance otimizada.
- ✅ Interface moderna com UI consistente (TailwindCSS + shadcn).

---

## 🧪 Como Executar o Projeto

### 1. Instale as dependências:

```bash
pnpm install
```

### 2. Configure as variáveis de ambiente:

- Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

- Preencha as variáveis de ambiente (ex.: `GITHUB_ID`, `GITHUB_SECRET` etc).

### 3. Configure e popule o banco de dados:

Execute as migrações:

```bash
pnpm prisma migrate dev
```

Rode o seed para popular os dados iniciais:

```bash
tsx prisma/seed.ts
```

### 4. Execute o projeto

#### Modo desenvolvimento:

```bash
pnpm run dev
```

#### Modo produção:

```bash
pnpm run build
pnpm run start
```

---

## 🌐 Acesse a aplicação

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 🔗 Repositório

[🔗 GitHub – Yan-CarlosIF/book-wise](https://github.com/Yan-CarlosIF/book-wise)
