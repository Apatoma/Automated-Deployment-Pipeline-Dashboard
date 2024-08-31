const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const axios = require('axios');
const pipelineMetricsRouter = require('./routes/pipelineMetrics');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Configuración de rutas
app.use('/api/pipeline', pipelineMetricsRouter);

// Conexión de Socket.io
io.on('connection', (socket) => {
    console.log('New client connected');

    // Emitir datos de pipeline en tiempo real
    setInterval(async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/pipeline/status');
            socket.emit('pipelineStatus', response.data);
        } catch (error) {
            console.error('Error fetching pipeline status:', error);
        }
    }, 5000);

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
