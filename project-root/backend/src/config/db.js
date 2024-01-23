const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://adhithyarg26:Password%40123@schoolapplication.xg06uin.mongodb.net/?retryWrites=true&w=majority', {

}).on('open', () => {
  console.log('Connection with atlas Established!!');
}).on('error', (error) => {
  console.log('Error:', error);
});

// mongoose.connect(uri);
// var db = mongoose.connection;

module.exports = connection;
