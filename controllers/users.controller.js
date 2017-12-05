const status = require('http-status');
const config = require('../_config');
const handler = require('../utils/handler');
const http = require('http');
var fs = require('fs');
const path = require('path');

let _user;

const getAll = (req, res) => {
    _user.find({})
        .exec(handler.handleMany.bind(null, 'users', res));
};

const create = (req, res) => {
    const user = req.body;

    _user.create(user)
        .then(created => res.json({ user: created }))
        .catch(err => res.status(s.INTERNAL_SERVER_ERROR).json({
            error: err.toString()
    }));
};

module.exports = (User) => {
    _user = User;
    return ({
        getAll,
        create
    });
}