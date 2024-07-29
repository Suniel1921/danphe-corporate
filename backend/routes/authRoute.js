const express = require ('express');
const routes = express.Router();
const controller = require ('../controller/authController');

routes.post('/register', controller.register);
routes.post('/login', controller.login);
routes.post('/verifyOtp', controller.verifyOTP);
routes.post('/forgotPassword', controller.forgotPassword);
routes.post('/resetPassword', controller.resetPassword);


module.exports = routes