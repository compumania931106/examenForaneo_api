const status = require('http-status');
const config = require('../_config');
const handler = require('../utils/handler');
const http = require('http');
var fs = require('fs');
const path = require('path');

let _purchase;

const getAll = (req, res) => {
    _purchase.find({})
        .exec(handler.handleMany.bind(null, 'purchases', res));
};

const create = (req, res) => {
    const purchase = req.body;

    _purchase.create(purchase)
        .then(created => res.json({ purchase: created }))
        .catch(err => res.status(s.INTERNAL_SERVER_ERROR).json({
            error: err.toString()
    }));
};

module.exports = (Purchase) => {
    _purchase = Purchase;
    return ({
        getAll,
        create
    });
}