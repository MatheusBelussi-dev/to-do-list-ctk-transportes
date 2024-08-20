import express from 'express';
import  {fetchPublicApiData, fetchAndInsertTodos} from './services.js'

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

export default router;