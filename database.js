var mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://cluster0.dvd0x.mongodb.net/myFirstDatabase', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb+srv://roye7601:employees7601@cluster0.dvd0x.mongodb.net/EmployeeDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
var db_conn = mongoose.connection;
db_conn.on('connected', function () {
    console.log('database is connected successfully');
});
db_conn.on('disconnected', function () {
    console.log('database is disconnected successfully');
})
db_conn.on('error', console.error.bind(console, 'connection error:'));


module.exports = db_conn;