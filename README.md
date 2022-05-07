<h1 align="center">
  Feedback Widget!
  
  ![alt text](https://raw.githubusercontent.com/paulobesen/widget-feedback/main/readme-image.png)
 
  [Acessar projeto](https://widget-feedback-tau.vercel.app/)
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">
</p>

<br>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [Node](https://nodejs.org/en/)

## 💻 Projeto

Feedback Widget é um pequeno widget onde usuário final poderá dar feedback do site e se necessário, enviar uma imagem do site/app.

## 🚀 Como executar

- Clone o repositório, note que são 3 pastas divididas em:
  - Front
  - Back
  - Mobile
- Instale as dependências com `npm install` no projeto desejado
- Inicie com `npm run dev`, se for o mobile, use `expo start`

## Configurações
- Para o Mobile, alterar o baseURL dentro de libs/api.
- Para o Front, alterar/criar o .env.local com `VITE_API_URL=http://localhost:3333`
- Para o Back, alterar o arquivo schema.prisma com `provider = sqlite` e alterar/criar arquivo .env com `DATABASE_URL="file:./dev.db"`

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
