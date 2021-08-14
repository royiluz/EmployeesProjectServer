const mongoose = require('mongoose');

//Define a schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    status: String
});

// Compile model from schema
const userTable = mongoose.model('users', userSchema);

module.exports = userTable;
