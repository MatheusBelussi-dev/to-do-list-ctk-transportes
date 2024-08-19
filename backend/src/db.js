
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  user: 'admin',
  host: 'postgres', 
  database: 'mydb',
  password: 'admin',
  port: 5432,
});

export default pool;
