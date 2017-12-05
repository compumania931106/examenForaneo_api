const router = require('express').Router();

module.exports = (wagner) => {

    const userCtrl = wagner.invoke((User) =>
        require('../controllers/users.controller')(User));

    router.get('/', (req, res) =>
        userCtrl.getAll(req, res));

    router.post('/', (req, res) =>
        userCtrl.create(req, res));
    
    return router;
}