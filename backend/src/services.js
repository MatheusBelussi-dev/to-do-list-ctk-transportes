import axios from 'axios';

import pool from './db.js'; 

export const fetchPublicApiData = async () => {
  try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      const todo = response.data;

      const client = await pool.connect();
      await client.query(
          'INSERT INTO todo.tarefas (titulo, status) VALUES ($1, $2)',
          [todo.title, todo.completed ? 'concluída' : 'pendente']
      );
    
      client.release();
      console.log('Dados salvos no banco de dados!');
  } catch (error) {
      console.error('Erro ao buscar ou salvar dados:', error);
  }
};

export const fetchAndInsertTodos = async () => {
  try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      const todos = response.data;

      const client = await pool.connect();

      for (const todo of todos.slice(0, 100)) {  
          await client.query(
              'INSERT INTO todo.tarefas (titulo, status) VALUES ($1, $2)',
              [todo.title, todo.completed ? 'concluída' : 'pendente']
          );
      }

      client.release();
      console.log('100 tarefas salvas no banco de dados!');
  } catch (error) {
      console.error('Erro ao buscar ou salvar dados:', error);
  }
};




