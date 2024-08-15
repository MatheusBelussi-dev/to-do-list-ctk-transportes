# Aplicação de Listagem de Tarefas

> Uma aplicação web para gerenciar uma lista de tarefas (To-Do List) com integração a uma API pública e armazenamento em banco de dados PostgreSQL.

## Tecnologias Utilizadas

- **Frontend**: React, Next.js, TypeScript
- **Estilização**: TailwindCSS (opcional)
- **Backend**: Node.js (integrado com Next.js)
- **Banco de Dados**: PostgreSQL
- **API Pública**: JSONPlaceholder

## Etapas do Desenvolvimento

1. **Planejamento e Design**
   - Definição da estrutura de dados para armazenar as tarefas.
   - Definição do Design do Front-End

2. **Configuração do Banco de Dados**
   - Criação de uma tabela `tarefas` no PostgreSQL com as colunas `id`, `titulo`, `descricao`, `status`, `criado_em`, `atualizado_em`.
   - Configuração do banco de dados utilizando uma plataforma gratuita (Railway).

3. **Integração com API Pública**
   - Integração com a API JSONPlaceholder para carregar tarefas fictícias.
   - Armazenamento das tarefas obtidas da API no banco de dados local.

4. **Desenvolvimento do Frontend**
   - Criação de uma interface responsiva usando React, Next.js e TypeScript.
   - Implementação de funcionalidades para visualizar, adicionar, editar e excluir tarefas.

5. **Testes e Validação**
   - Testes de integração com a API pública e banco de dados.
   - Testes de interface para garantir a responsividade e usabilidade.

## Como Executar o Projeto

### Pré-requisitos

- Node.js v14 ou superior
- PostgreSQL (pode ser configurado localmente ou utilizando uma plataforma como Railway, Heroku, etc.)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-projeto.git
   cd nome-do-projeto
   ```

2. Instale as dependências:
    ```bash
    npm install
    ```
3. Configure o banco de dados:

- Crie um banco de dados PostgreSQL.

- Execute o script SQL para criar a tabela tarefas

    ```sql
    CREATE TABLE tarefas (
    id SERIAL PRIMARY KEY,
    titulo TEXT NOT NULL,
    descricao TEXT,
    status TEXT CHECK (status IN ('pendente', 'em andamento', 'concluída')),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    ```
- Configure o arquivo .env com as credenciais do banco de dados:
    ```perl
    DATABASE_URL=postgresql://usuario:senha@host:porta/nome-do-banco
    ```
# Execução
1. Inicie o servidor de desenvolvimento: 
    ```bash
    npm run dev
    ```
2. Acesse a aplicação em http://localhost:3000.

# Testes
- Para executar os testes:
    ```bash
    npm test
    ```
# Decisões de Arquitetura
- Escolha de Tecnologias: React e Next.js foram escolhidos pela sua popularidade e eficiência em criar aplicações web modernas. TypeScript foi utilizado para garantir a segurança e clareza do código.
- Banco de Dados: PostgreSQL foi escolhido pela sua robustez e suporte a transações complexas.
- Integração com API Pública: JSONPlaceholder foi utilizado para fornecer dados fictícios e enriquecer a aplicação com usuários simulados.

# Contribuição
- Issues: Caso encontre algum bug ou tenha sugestões de melhoria, por favor, abra uma issue no repositório.
- Pull Requests: Para contribuir, faça um fork do projeto e envie um pull request para a branch main.

# Licença
Este projeto está licenciado sob a licença MIT.

```perl
Este texto em Markdown está pronto para ser inserido no arquivo README.md do seu projeto.
```

