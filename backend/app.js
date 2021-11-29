const express = require('express');
const debug = require('debug')('server:server');
const http = require('http');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config({ path: '.env.development' });
const colors = require('colors');
const connectDB = require('./database');
const apiRoutes = require('./routes/api.routes.js');
const path = require('path');
connectDB();

const app = express();
const PORT = process.env.PORT || 8080;
app.set('port', PORT);
app.use(cors({ origin: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', apiRoutes);

// serve static files
app.use('/static', express.static('public'));

// serve react files
const CLIENT_BUILD_PATH = path.join(__dirname, './frontend/dist');
app.use(express.static(CLIENT_BUILD_PATH));
app.get('/*', (req, res) => res.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html')));

const server = http.createServer(app);

// server.listen(PORT);
server.on('error', error => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
});

server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
});

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

module.exports = server;
