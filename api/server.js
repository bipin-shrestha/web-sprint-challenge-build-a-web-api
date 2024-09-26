const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const actionRouter = require('./actions/actions-router.js')
const projectRouter = require('./projects/projects-router.js')
const server = express();
// Complete your server here!
// Do NOT `server.listen()` inside this file!
server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Let's write some codes here!!!</h2>`)
})

module.exports = server;
