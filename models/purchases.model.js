const mongoose = require('mongoose');

let user = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true }
});

let purchaseSchema = new mongoose.Schema({
    item: { type: String, required: true },
    sheetNumber: { type: String, required: true },
    user: user
});

const purchaseModel = mongoose.model('purchaseSchema', purchaseSchema, 'purchases');
module.exports = purchaseModel;