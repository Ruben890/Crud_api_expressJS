const express = require('express');
const router = express.Router();
const controller = require('../../controllers/controller.users.js')




router
    .get('/users', controller.getAll)
    .get('/users/:id', controller.getOne)
    .put('/users/:id', controller.update)
    .post('/users', controller.post)
    .delete('/users/:id', controller.Delete)


module.exports = router