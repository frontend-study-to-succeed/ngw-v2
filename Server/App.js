import Express from 'express';
import cors from 'cors';

const appInstance = Express();

const createServer = (serverPort) => {
  return appInstance.use(cors()).listen(serverPort, () => {
    console.log(`Listening on ${serverPort}...`);
  });
};

export { createServer };
