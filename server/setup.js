import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import http from 'http';
import cons from 'consolidate';

export default {
    exp: express,
    path: path,
    fav: favicon,
    lgr: logger,
    ckPrsr: cookieParser,
    bdyPrsr: bodyParser,
    http: http,
    cons: cons
};
