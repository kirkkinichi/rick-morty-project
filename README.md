# Kirk and Morty

O Kirk and Morty é uma Single-page application que utiliza o framework [Angular](https://angular.io/) e a API : [The Rick and Morty API](https://rickandmortyapi.com/) para listar e detalhar os Personagens, Episódios e os Locais que a série apresenta.

![Tela de Personagens](/src/assets/characters-page.png)


## Tecnologias e Ferramentas

- [Angular CLI](https://github.com/angular/angular-cli) 17.3.3
- [Node.js](https://github.com/nodejs) 20.12.1
- [Docker](https://github.com/docker) 26.0.0
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) 5.3.3
- [Font Awesome](https://fontawesome.com/) 0.14.1

## Requisitos

- Instalar [Node.js e npm](https://nodejs.org/en) 
- Instalar [Angular CLI](https://angular.io/cli)

## Como executar o projeto

- Clone o repositório:

```bash
git clone https://github.com/kirkkinichi/rick-morty-project.git
```
- Execute o comando `ng serve` no terminal
- Navegue para `http://localhost:4200/`

## Para acessar o conteúdo do site
- Faça o login na aplicação, utilizando os campos:
    - Username = admin
    - Password = admin

## Como executar o projeto em Docker (local)

- Instalar [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Executar o comando: `docker-compose up --build kirk-and-morty -d` no terminal da aplicação 

## Como executar o projeto em Docker (Cloudflare customizado)

- Instalar [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Configurar um tunnel Docker na [Cloudflare](https://cloudflare.com)
- Utilizar o token do tunnel no arquivo .env
- Executar o comando: `docker-compose up --build -d` no terminal da aplicação


## Live Preview

https://kirk-and-morty.kirksilva.com/login

## Autor

Kirk Kinichi Tomisaki Rodrigues da Silva
