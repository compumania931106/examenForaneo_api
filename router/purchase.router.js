const router = require('express').Router();

module.exports = (wagner) => {

    const purchaseCtrl = wagner.invoke((Purchase) =>
        require('../controllers/purchases.controller')(Purchase));

    router.get('/', (req, res) =>
        purchaseCtrl.getAll(req, res));

    router.post('/', (req, res) =>
        purchaseCtrl.create(req, res));
    
    return router;
}