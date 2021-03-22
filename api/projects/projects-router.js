// Write your "projects" router here!
const express = require('express');
const projectModel = require('./projects-model.js');
const router = express.Router();

router.get('/', ( req, res ) => {
    projectModel.get()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error => {
        res.status(500).json({ message: 'Error returning the array of the projects'})
    });
});

router.get('/:id', ( req, res ) => {
    projectModel.get(req.params.id)
    .then(project =>  {
        res.status(200).json(project)
    })
    .catch(error => {
        res.status(500).json({ message: 'Error returning project with given id'})
    });
});

router.post('/', ( req, res ) => {
    projectModel.insert(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(error => {
        res.status(500).json({ message: 'Error Creating new Project'})
    });
});

router.put('/:id', ( req, res ) => {
    projectModel.update(req.params.id,req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(error => {
        res.status(500).json({ message: 'Error Updating the project'})
    });
});

router.delete('/:id', ( req, res ) => {
    projectModel.remove(req.params.id)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(error => {
        res.status(500).json({ message: 'Error Deleting the Project'})
    });
});

module.exports = router;