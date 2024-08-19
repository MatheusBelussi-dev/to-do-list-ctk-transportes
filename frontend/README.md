# Aplicação de Listagem de Tarefas

> Uma aplicação web para gerenciar uma lista de tarefas (To-Do List) com integração a uma API pública e armazenamento em banco de dados PostgreSQL.

## Tecnologias Utilizadas

- **Frontend**: React, Next.js, TypeScript
- **Estilização**: Chakra UI 
- **Backend**: Node.js (integrado com Next.js)
- **Banco de Dados**: PostgreSQL
- **API Pública**: JSONPlaceholder

## Etapas do Desenvolvimento

1. **Planejamento e Design**
   - Definição da estrutura de dados para armazenar as tarefas.
   - Definição do Design do Front-End.

2. **Configuração do Banco de Dados**
   - Criação de uma tabela `tarefas` no PostgreSQL com as colunas `id`, `titulo`, `descricao`, `status`, `criado_em`, `atualizado_em`.
   - Configuração do banco de dados feita com PostgreSQL e visualizada pelo pgAdmin.

3. **Integração com API Pública**
   - Integração com a API JSONPlaceholder para carregar tarefas fictícias.
   - Armazenamento das tarefas obtidas da API no banco de dados local.

4. **Desenvolvimento do Frontend**
   - Criação de uma interface responsiva usando React, Next.js e TypeScript.
   - Implementação de funcionalidades para visualizar, adicionar, editar e excluir tarefas.

## Como Executar o Projeto

### 1. Instalar Docker e Docker Compose

- Acesse o site e instale o [Docker](https://www.docker.com/).

### 2. Clonar o Repositório

- Para clonar o repositório, acesse o GitHub e no terminal utilize o seguinte comando:

  ```bash
  git clone https://github.com/MatheusBelussi-dev/to-do-list-ctk-transportes.git
  ```



# Como Executar o Projeto

- Esta aplicação usa Docker e Docker Compose para gerenciar o ambiente de desenvolvimento e produção. Portanto, a única coisa que você precisa instalar no seu sistema é o Docker.
- Após instalação do Docker inicie o mesmo e dentro do projeto utilize o seguinte comando:
   
      ```bash
      docker-compose up --build
      ```
- Para acessar o banco de dados você pode instalar a interface para visualização denominada pgAdmin, segue o link do site para instalação: 

- https://www.pgadmin.org/download/pgadmin-4-windows/

- Após instalação, clicar em adicionar server e inserir os seguintes dados:

- **Host**: `localhost`
- **Porta**: `5432`
- **Usuário**: `admin`
- **Senha**: `admin`
- **Banco de Dados**: `mydb`

- Após a conexao acesse a tabela tarefas através da seguinte query

      ```bash
      SELECT * FROM todo.tarefas
      ```

- Para executar os testes do endpoint pelo backend, você deve buildar a aplicação através do comando docker mencionado acima e acessar a porta localhost:5000 e inserir a rota junto com a porta: exemplo: localhost:5000/data

# Pré-requisitos

- Node.js v14 ou superior
- PostgreSQL (Configurado localmente via docker e visuaslizado pela interface pgAdmin.)


# Decisões de Arquitetura
- Escolha de Tecnologias: React e Next.js foram escolhidos pela sua popularidade e eficiência em criar aplicações web modernas, onde em conjunto utilizamos o Chackra UI para uma     melhor componetização da aplicação. TypeScript foi utilizado para garantir a segurança e clareza do código.
- Banco de Dados: PostgreSQL foi escolhido pela sua robustez e suporte a transações complexas.
- Integração com API Pública: JSONPlaceholder foi utilizado para fornecer dados fictícios e enriquecer a aplicação com usuários simulados.
- Utilido o Docker para buildar os 3 ambientes (Banco de dados, Frontend e Backend) em um conteiner

# Contribuição
- Issues: Caso encontre algum bug ou tenha sugestões de melhoria, por favor, abra uma issue no repositório.
- Pull Requests: Para contribuir, faça um fork do projeto e envie um pull request para a branch main.




