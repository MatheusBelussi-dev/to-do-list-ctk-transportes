// src/db.ts
import pg from 'pg';
const { Pool } = pg;
// Cria uma instância de Pool para gerenciar a conexão com o banco de dados
const pool = new Pool({
  user: 'admin',
  host: 'postgres',  // Use o nome do serviço do PostgreSQL
  database: 'mydb',
  password: 'admin',
  port: 5432,
});

export default pool;
