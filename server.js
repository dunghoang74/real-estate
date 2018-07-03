const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const app = express();
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

const port = process.env.PORT || config.port_to_listen;

if(process.env.NODE_ENV === 'production'){
    const privateKey  = fs.readFileSync('/etc/nginx/ssl/kazamap.com.key', 'utf8');
    const certificate = fs.readFileSync('/etc/nginx/ssl/kazamap.com.crt', 'utf8');
    const credentials = {key: privateKey, cert: certificate};
    const httpsServer = https.createServer(credentials, app);
    httpsServer.listen(port, () => {
        console.log(`httpsServer listening on ${port}`);
    });
}

if(process.env.NODE_ENV === 'development'){
    const httpServer = http.createServer(app);
    httpServer.listen(port, () => {
        console.log(`httpServer listening on ${port}`);
    });
}


app.use(helmet());
app.use(express.json());

// Adding Headers for requests.
app.use( (req, res, next) => {
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

app.use(cookieParser());
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/property', propertyRoutes);
app.use('/api/v1/property_unit', propertyUnitRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/notification', notificationRoutes);
app.use('/api/v1/page', pageRoutes);

db.connectTo();


