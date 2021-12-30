# CRUD simples de API para firmar conhecimento. API provem uma to-do list

### Instalação do projeto <br/>
`git clone` and `npm install`

### Rodando o projeto <br/>
`npm run start-dev`

### Pré-requisitos (typeScript, nodemon, ts-node) <br/>
`npm i -g typescript nodenom ts-node`

# Documentação

## End-point: /todo - Listar todas tarefas
### Method: GET
>```
>{{BASE}}/todo
>```
### Response: 200
```json
{
    "list": [
        {
            "id": 1,
            "title": "Estudar ",
            "done": false
        },
        {
            "id": 2,
            "title": "Ver Matrix",
            "done": false
        },
        {
            "id": 3,
            "title": "Ler quadrinho",
            "done": false
        },
        {
            "id": 4,
            "title": "Ler livro",
            "done": false
        },
        {
            "id": 5,
            "title": "Testando",
            "done": false
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /todo -  Adicionar nova tarefa
### Error Messages

*   "Dados não foram enviados corretamente" - `title` obrigatório
### Method: POST
>```
>{{BASE}}/todo
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /todo/:id - Atualizar tarefa
### Error Messages

*   "Item não encontrado" - Verificar existência do parâmetro `id` passado
### Method: PUT
>```
>{{BASE}}/todo/123
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: /todo/:id -  Deletar tarefa
### Method: DELETE
>```
>{{BASE}}/todo/123
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

Note: In this example `{{BASE}}` is the localhost:4000, if you want change the port in the dotenv file
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)