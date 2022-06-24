# Processo Seletivo - Desenvolvedor Web Full Stack Júnior

## Desafio
Construir uma SPA de calendário de tarefas do dia utilizando uma stack que você sinta
confortável, pensando sempre em performance, segurança e escalabilidade.

## Importante:
Pontos que serão levados em consideração (quanto maior o grau de senioridade aplicado,
maior será a cobrança em relação aos seguintes pontos):
● Reutilização de código fonte
● Padrões de projetos
● Backend e frontend totalmente isolados
● Serviços REST
● Escalabilidade
● Segurança
Não é obrigatório seguir à risca as sugestões propostas, use sua imaginação!

## Funcionalidades:
● Cadastro de uma nova tarefa
● Sugestão de atributos de uma Tarefa:
● Título
● Descrição
● Data e hora que a tarefa acontecerá
● Tempo de duração
● Edição de tarefa
● Remoção de tarefa
● Permitir que o usuário escolha a forma de visualização das tarefas por dia,
● semana ou mês
● Campo de busca de tarefas pelo título

## Nível Júnior
Implemente o maior número de itens possíveis descritos no setor de funcionalidades
Mantenha seu código limpo seguindo conceitos de padrões de projetos sempre que
possível.

## 💡 Informações de como executar o projeto
O projeto está hospedado na heroku, porem as vezes há algumas quedas por excesso de memório
<a href="https://apptaskchallenge.herokuapp.com/">apptaskchallenge</a>
User admin
email: admin@admin.com
password: admin

## - Você pode clonar o repositório inteiro, onde já estão os dois projetos, backend e frontend.

### Executar o Backend
```bash

  # Acessar no terminal a pasta onde se encontra o projeto backend

  # rodar o comando npm install

  # Criar o arquivo .env com base no arquivo .env.example incluindo a linha de conexão, ou apenas remover o example do .env

  # Caso queira testar com um bando de dados local, execute o comando npx prisma migrate dev. (Não é necessário pois o banco está hospedado).

  ## rodar o comando npm run dev 


```
<p>Endpoint<code>/auth/register/user</code> Registra um usuário e retorna </p>

```json

{
	"id": "4fdf7f3d-0d92-459f-bd9f-50b962a7a1c4",
	"username": "nameuser",
	"email": "user@email.com",
	"password": "$2a$08$utclQyATzoRel1/y2taOwOYyVlpNVbmZtnQhCj1fEI3PsNwPpHxvu"
}

```
<p>Endpoint<code>/auth/user/login</code> Faz o login e retorna o usuário </p>

```json

{
	"id": "4fdf7f3d-0d92-459f-bd9f-50b962a7a1c4",
	"username": "username",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTYwNzg5MzcsImV4cCI6MTY1NjE2NTMzNywic3ViIjoiNGZkZjdmM2QtMGQ5Mi00NTlmLWJkOWYtNTBiOTYyYTdhMWM0In0.E4Sb0ifJrP60cCKSqCZ-7fkYYCJlearx4tIo0l-3jQ0"
}

```
<p>Endpoint<code>/register/task</code> Registra uma nova tarefa e retorna, mas para registrar é necessário ter um usuario cadastrado e em authorId colocar o id do usuário </p>

```json

{
	"title": "Estudar React",
	"description": "Exemplo de descripiton",
	"task_date": "20/05/2022",
	"task_time": "13:30:00",
	"task_duration": "01:30:00",
	"active": true,
	"authorId": "4fdf7f3d-0d92-459f-bd9f-50b962a7a1c4"
}

```
<p>Endpoint<code>/register/task</code>Busca uma tarefa pelo id do usuário</p>

```json
{
	"authorId": "a745ffbc-9df4-4acb-b6f8-6cc84ea1b72a"
}
```
<p>Endpoint<code>/task/update</code>Atualiza uma tarefa, mas para ter autorização deve-se enviar o token gerado pelo login do usuário</p>

```json
	{
		"id": "6a7e953d-ed1d-4fa6-aff0-04805148cdb5",
		"active": false
	}
```
<p>Endpoint<code>/task/delete/:id</code>Deleta uma tarefa, para deletar envie o id da tarefa pelo parametro da URL e envie no header Authorization o token gerado pelo login do usuário.</p>

```json
	{
		"id": "6a7e953d-ed1d-4fa6-aff0-04805148cdb5"
	}
```


### Executar o Frontend

```
  # Acessar no terminal a pasta onde se encontra o projeto Frontend

  # rodar o comando npm install

  ## rodar o comando npm start
```
<img src="./img/desktop.png" width="200" />
<img src="./img/mobile.png" />
