import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  database: 'database',
  user: 'admin2',
  password: '48273#Xz',
  port: 5432
})

async function createTable() {
  await pool.query(`
    create table if not exists people (
      id integer not null,
      name varchar,
      primary key (id)
    )
  `);
  console.log('Table created');
}

createTable()