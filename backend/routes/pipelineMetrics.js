const express = require('express');
const router = express.Router();
const { getPipelineStatus } = require('../jenkinsClient');

router.get('/status', async (req, res) => {
    try {
        const status = await getPipelineStatus();
        res.json(status);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch pipeline status' });
    }
});

module.exports = router;
