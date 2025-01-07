import { Client } from 'pg';

// Configurações para o cliente PostgreSQL
const client = new Client({
  user: 'postgres',
  host: 'database2.cbt4qvxj4ebb.us-east-2.rds.amazonaws.com',
  database: 'postgres',
  password: '43816729',
  port: 5432,
});

// Conectando ao banco de dados
client.connect().catch((err) => {
  console.error('Erro ao conectar ao banco de dados:', err);
  process.exit(1); // Encerra a aplicação se a conexão falhar
});

export const db = client;
