const { connect, connection } = require('mongoose');

const contString = 'mongodb://127.0.0.1:27017/studentsDB';

connect(contString);

module.exports = connection;