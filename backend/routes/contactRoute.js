const express = require ('express');
const routes = express.Router();
const controller = require ('../controller/contactController');

routes.post('/contacts', controller.contact);
routes.post('/userCompanyInfo', controller.createUserCompanyInfo);


module.exports = routes;
