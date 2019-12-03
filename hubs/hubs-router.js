const express = require('express');

const Hubs = require('./hubs-model.js'); //always update paths
const router = express.Router(); //make sure to invoke and use capital "R"

router.use(express.json());


router.get('/', (req, res) => {
    ////here we are reading the query string params
    //we can use limit to decide how many records to get from the database
    console.log(req.query)
  Hubs.find(req.query)
  .then(hubs => {
    res.status(200).json(hubs);
  })
  .catch(error => {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the hubs',
    });
  });
});

router.get('/:id', (req, res) => {
  Hubs.findById(req.params.id)
  .then(hub => {
    if (hub) {
      res.status(200).json(hub);
    } else {
      res.status(404).json({ message: 'Hub not found' });
    }
  })
  .catch(error => {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the hub',
    });
  });
});

router.post('/', (req, res) => {
  Hubs.add(req.body)
  .then(hub => {
    res.status(201).json(hub);
  })
  .catch(error => {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: 'Error adding the hub',
    });
  });
});

router.delete('/:id', (req, res) => {
  Hubs.remove(req.params.id)
  .then(count => {
    if (count > 0) {
      res.status(200).json({ message: 'The hub has been nuked' });
    } else {
      res.status(404).json({ message: 'The hub could not be found' });
    }
  })
  .catch(error => {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: 'Error removing the hub',
    });
  });
});

router.put('/:id', (req, res) => {
  const changes = req.body;
  Hubs.update(req.params.id, changes)
  .then(hub => {
    if (hub) {
      res.status(200).json(hub);
    } else {
      res.status(404).json({ message: 'The hub could not be found' });
    }
  })
  .catch(error => {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: 'Error updating the hub',
    });
  });
});

// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

router.get("/:id/messages", (req,res)=>{ //a sub route makes sense if something only makes sense in one context
    Hubs.findHubMessages(req.params.id)
    .then(messages => {
        res.status(200).json(messages)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({errorMessage: "error getting hubs messages"})
    })
})

router.post('/:id/messages', (req, res)=> {
    console.log(req.body)
    Hubs.addMessage(req.body)
    .then(message=>{
        res.status(201).json(message)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({errorMessage: "error adding hubs message"})
    })
})

module.exports = router;