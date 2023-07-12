import { Server } from 'socket.io';
import { socketEventInit } from './socketEvents.js';

let socketInstance = null;

const createSocketWithServer = (serverInstance) => {
  socketInstance = new Server(serverInstance, {
    cors: {
      origin: 'https://notion-guest-book.netlify.app',
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  socketEventInit(socketInstance);
};

export { createSocketWithServer };
