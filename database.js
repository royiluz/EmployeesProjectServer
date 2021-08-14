//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb+srv://roye7601:employees7601@cluster0.dvd0x.mongodb.net/EmployeeDB?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
var db_conn = mongoose.connection;

//Bind connected
db_conn.on('connected', function () {
    console.log('database is connected successfully');
});

//Bind disconnected
db_conn.on('disconnected', function () {
    console.log('database is disconnected successfully');
})

//Bind connection to error event (to get notification of connection errors)
db_conn.on('error', console.error.bind(console, 'connection error:'));


module.exports = db_conn;