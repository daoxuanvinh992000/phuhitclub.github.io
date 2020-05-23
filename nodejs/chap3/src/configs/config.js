const expess = require('express');
const mongoose = require('mongoose');
const mongodb = require('./mongodb');
const apis = require('../apis');

function getMongoConnectionUri() {
    let secret = '';
    if(mongodb.user !== '')
        secret = `${mongodb.user}:${mongodb.password}@`;
    
    return `mongodb://${secret}${mongodb.host}:${mongodb.port}/${mongodb.dbName}`
        
}

module.exports = function (app) {

    app.use(expess.json());
    app.use(expess.urlencoded({ extended: false }));

    mongoose.connect(getMongoConnectionUri(),
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err) {
        if (err)
            throw err; 

        console.log("Connect to MongoDB success!")
    });

    app.use(apis);

    app.use((err, req, res, next) => {
        err.code = 1001;
        next(err);
    })

    app.use((err, req, res, next) => {
        res.status(400).json(err);
    })

}