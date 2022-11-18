<p align="center">
  <a href="" rel="noopener">
 <img src="https://raw.githubusercontent.com/IvanOliver131/mobile-bolao/master/src/assets/logo.svg" alt="<nlw/> COPA" width="350px"></a>
</p>
<h3 align="center"></h3>

---

### Desenvolvimento Web

<img src="https://github.com/IvanOliver131/mobile-bolao/blob/master/imgs/page.png?raw=true" alt="Página WEB" width="full">

### Desenvolvimento Mobile

<img src="https://github.com/IvanOliver131/mobile-bolao/blob/master/imgs/mobile.gif?raw=true" alt="Tela Login mobile" width="350px">

<br>

---

## 📱 Sobre o projeto

<p align="center">O projeto visa o desenvolvimento de uma plataforma para que o usuários possam criar bolões para a copa do mundo de 2022. A aplicação WEB é uma interface simples e direta, permitindo o usuário conhecer o projeto e criar os seus bolões. Já a aplicação mobile desempenha as demais funcionalidades, como por exemplo, participar de bolões, realizar palpites, compartilhamento de bolões e entre outros.</p>

## ⛏️ Ferramentas

- Typescript
- React
- React Native
- Native Base
- NextJs
- Tailwind CSS
- Expo
- Fastify
- Prisma
- SQLite

## 🚀 Recomendações

## Server

entre na pasta `server` presente no diretório raiz, e rode o comando para instalar as dependências:

```bash
npm i
```

Agora para criar o banco de dados, rode o comando:

```bash
npx prisma migrate dev
```

Por fim para iniciar o servidor, rode o comando:

```bash
npm run dev
```

## Web

Para rodar o projeto web, entre na pasta `web` presente no diretório raiz, e rode o comando para instalar as dependências:

```bash
npm i
```

Agora para iniciar o projeto, rode o comando:

```bash
npm run dev
```

Para utilizar o projeto em modo estático (com uso de cache e atualização dos dados de 10 em 10 minutos):

```bash
npm run start
```

> Recomendado: não esqueça de iniciar o servidor antes de iniciar o projeto web

## Mobile

Para rodar o projeto mobile você precisará baixar o app [Expo Go](https://expo.dev/client).
Após baixar o app, entre na pasta `mobile` presente no diretório raiz, e rode o comando para instalar as dependências:

```bash
npm i
```

Agora para iniciar o projeto, rode o comando:

```bash
npx expo start
```

> Atenção: não esqueça de iniciar o servidor antes de iniciar o projeto mobile
