// Write your "actions" router here!
const express = require('express');
const actionModel = require('./actions-model.js');
const router = express.Router();

router.get('/', ( req, res ) => {
    actionModel.get()
    .then(action => {
        res.status(200).json(action)
    })
    .catch(error => {
        res.status(500).json( {message:'Error Retrieve the actionList'})
    });
});

router.get('/:id', ( req, res ) => {
    actionModel.get(req.params.id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(error => {
        res.status(500).json({message: 'Error Retrieve the actionId body'});
    });
});

router.post('/', ( req, res ) => {
    actionModel.insert(req.body)
    .then(action => {
        res.status(201).json(action)
    })
    .catch(error => {
        res.status(500).json({message: 'Error creating the Action'})
    });
});

router.put('/:id', ( req, res ) => {
    actionModel.update(req.params.id, req.body)
    .then(action => {
        res.status(201).json(action)
    })
    .catch(error => {
        res.status(500).json({message: 'Error updating Action'})
    });
});

router.delete('/:id', ( req, res ) => {
    actionModel.remove(req.params.id)
    .then(action => {
        res.status(201).json(action)
    })
    .catch(error => {
        res.status(500).json({message: 'Error Deleting Action'})
    });
});

module.exports = router;
