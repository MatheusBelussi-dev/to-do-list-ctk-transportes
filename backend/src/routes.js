const express = require('express');
const { fetchPublicApiData } = require('./services');

const router = express.Router();

router.get('/data', async (req, res) => {
    try {
        const data = await fetchPublicApiData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from public API' });
    }
});

module.exports = router;