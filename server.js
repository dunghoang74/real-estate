const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const server = express();
const db = require('./db');
const userRoutes = require('./api/routes/userRoutes');
const propertyRoutes = require('./api/routes/propertyRoutes');
const propertyUnitRoutes = require('./api/routes/propertyUnitRoutes');
const categoryRoutes = require('./api/routes/categoryRoutes');
const notificationRoutes = require('./api/routes/notificationRoutes');
const pageRoutes = require('./api/routes/pageRoutes');
const config = require('./config');

const port = process.env.PORT || config.port_to_listen;

server.use(helmet());
server.use(express.json());

// Adding Headers for requests.
server.use( function(req, res, next) {
    let  allowedOrigins = ['http://kazamap.com', 'http://gcomlnk.com', 'http://localhost'];
    let  origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    // res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Headers', "Authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

server.use(cookieParser());
server.use('/api/user', userRoutes);
server.use('/api/property', propertyRoutes);
server.use('/api/property_unit', propertyUnitRoutes);
server.use('/api/category', categoryRoutes);
server.use('/api/notification', notificationRoutes);
server.use('/api/page', pageRoutes);

db.connectTo();


server.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
