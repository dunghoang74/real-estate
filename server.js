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

const fs = require('fs');
const http = require('http');
const https = require('https');

const privateKey  = fs.readFileSync('/etc/nginx/ssl/kazamap.com.key', 'utf8');

console.log('process:::',process);

const port = process.env.PORT || config.port_to_listen;

server.use(helmet());
server.use(express.json());



// Adding Headers for requests.
server.use( (req, res, next) => {
    let  allowedOrigins = ['https://kazamap.com', 'http://gcomlnk.com', 'http://localhost:3000'];
    let  origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Headers', "Authorization, Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

server.use(cookieParser());
server.use('/api/v1/user', userRoutes);
server.use('/api/v1/property', propertyRoutes);
server.use('/api/v1/property_unit', propertyUnitRoutes);
server.use('/api/v1/category', categoryRoutes);
server.use('/api/v1/notification', notificationRoutes);
server.use('/api/v1/page', pageRoutes);

db.connectTo();

server.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
