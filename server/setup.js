let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let http = require('http');
let cons = require('consolidate');

module.exports = {
    exp: express,
    path: path,
    fav: favicon,
    lgr: logger,
    ckPrsr: cookieParser,
    bdyPrsr: bodyParser,
    http: http,
    cons: cons
};
