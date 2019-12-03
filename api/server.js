const express = require('express');

const hubsRouter = require('../hubs/hubs-router') //imported router

const server = express();

//server.use(express.json()); //unnecessary here because the router establishes it (better to have it on the router where we can specifiy per router use-case)

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

server.use('/api/hubs', hubsRouter) //replaced all the CRUD with the router. ALSO, the path here will concatenate the paths from the router to it 


// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

module.exports = server;