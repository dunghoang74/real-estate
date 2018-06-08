const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const config = require('./config');

const options = {
    autoReconnect: true
};

module.exports = {
    connectTo: function (uri = config.db_credentials) {
        return mongoose.connect(`${uri}`, options)
            .then(conn => console.log(`Connected to MongoDB DB:${config.db_name}`))
            .catch(err => {
                return err;
            });
    },
};
