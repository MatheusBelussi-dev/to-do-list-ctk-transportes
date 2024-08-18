import express from 'express';
import  {fetchPublicApiData, fetchAndInsertTodos, addTaskToDatabase } from './services.js'

const router = express.Router();

router.get('/data', async (req, res) => {
    try {
        const data = await fetchPublicApiData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from public API' });
    }


});

router.get('/data100', async (req, res) => {
    try {
        const data = await fetchAndInsertTodos();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from public API' });
    }


});

router.post('/addTasks', async (req, res) => {
    try {
        const result = await addTaskToDatabase(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Falha ao adicionar tarefa ao banco de dados' });
    }
});

export default router;