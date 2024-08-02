const express = require ('express');
const routes = express.Router();
const controller = require ('../controller/contactController');

routes.post('/contacts', controller.contact);


module.exports = routes;
