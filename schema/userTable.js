const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    status: String
});

const userTable = mongoose.model('users', userSchema);

module.exports = userTable;
