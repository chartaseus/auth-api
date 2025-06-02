require('dotenv').config();
const createServer = require('./Interfaces/http/createServer');
const container = require('./Infrastructures/container');

const start = async () => {
  const server = await createServer(container);
  await server.start();
  console.log('Server running on %s', server.info.uri);
};

start();
