import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Asegúrate de que este puerto coincida con el backend

export default socket;
