# eCards API
Rotas de login e cadastro 

## Como executar
**Instalar dependências:** Execute `npm install` ou `yarn`

Renomar arquivo `.env.example` para `.env`

## Rodar migration
Execute `npx prisma migrate dev` / `yarn prisma migrate dev`

## Rodar servidor 
Execute `npm run dev` ou `yarn dev`
O endereço da api estará disponível em `http://localhost:3333`

__**Obs: Certifique que o servidor esteja ativo antes de rodar o [frontend](../frontend)__
## Rotas
Todas as requisições de POST para esta API devem conter o header `Content-Type: application/json`.
Esta API contém as seguintes rotas:

* `POST /login` : Login de usuário
* `POST /register` : Cadastro de usuário

## Exemplos

### POST /login

Requisição:
```javascript
// POST /login
// Content-Type: application/json
{
  "email": "admin@gmail.com",
  "password": "admin123"
}
```

Resposta:
```javascript
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}
```

### POST /register

Requisição:
```javascript
// POST /register
// Content-Type: application/json
{
  "name": "Admin",
  "email": "admin@gmail.com",
  "password": "admin123"
}
```

Resposta:
```javascript
{
  "success": true
}
```